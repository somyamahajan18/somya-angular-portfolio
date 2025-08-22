import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ReCaptchaV3Service, NgxCaptchaModule } from 'ngx-captcha';
import { environment } from '../../../../environments/environment';
import emailjs from '@emailjs/browser';

interface ContactForm {
  name: string;
  email: string;
  message: string;
  recaptchaToken?: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule, NgxCaptchaModule],
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
  mailIcon = faPaperPlane;
  isLoading = false;
  statusMessage = '';
  environment = environment;

  userInput: ContactForm = {
    name: '',
    email: '',
    message: '',
  };

  error = {
    required: false,
    email: false,
  };

  constructor(private recaptchaV3Service: ReCaptchaV3Service) {}

  ngOnInit(): void {
    emailjs.init(environment.emailJs.publicKey);
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  checkRequired(): void {
    this.error.required =
      !this.userInput.name || !this.userInput.email || !this.userInput.message;
  }

  async handleSendMail(event: Event): Promise<void> {
    event.preventDefault();
    this.checkRequired();

    if (this.error.required || !this.isValidEmail(this.userInput.email)) {
      this.error.email = !this.isValidEmail(this.userInput.email);
      return;
    }

    try {
      this.isLoading = true;

      // ✅ Execute reCAPTCHA V3 and wait for token
      const token = await new Promise<string>((resolve, reject) => {
        this.recaptchaV3Service.execute(
          this.environment.recaptcha.siteKey,
          'submit',
          (res: string) => resolve(res),
          undefined,
          (err) => reject(err)
        );
      });

      this.userInput.recaptchaToken = token;

      const templateParams = {
        from_name: this.userInput.name,
        from_email: this.userInput.email,
        message: this.userInput.message,
        'g-recaptcha-response': token,
      };

      await emailjs.send(
        environment.emailJs.serviceId,
        environment.emailJs.templateId,
        templateParams
      );

      this.statusMessage = 'Message sent successfully!';

      setTimeout(() => {
        this.statusMessage = '';
      }, 5000);

      this.userInput = { name: '', email: '', message: '' };

    } catch (error) {
      console.error('Error sending email:', error);
      this.statusMessage = 'Failed to send message. Please try again.';
    } finally {
      this.isLoading = false;
    }
  }
}
