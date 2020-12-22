import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

import home_background from '../../../assets/home_background.png';
import emailValidator from '../../../utils/emailValidator';

import {
  Container,
  Content,
  AnimationContainer,
  Header,
  AsideContent,
  Form,
  LoginWithGoogle,
  FooterContainer,
  FormInput,
} from '../styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>, input: string) => {
      switch (input) {
        case 'email':
          setEmail(event.target.value);
          break;
        case 'password':
          setPassword(event.target.value);
          break;
        default:
          break;
      }
    },
    [],
  );

  const validateInputData = useCallback(() => {
    const emailFieldValidate = (): void => {
      if (!email) {
        setEmailError('The e-mail field can not be empty');
        return;
      }
      if (!emailValidator(email)) {
        setEmailError('Type a valid email address');
      }
    };

    if (!password) {
      setPasswordError(true);
    }
    emailFieldValidate();
  }, [email, password]);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setEmailError('');
      setPasswordError(false);

      validateInputData();

      // Here goes the rest of submit process
    },
    [validateInputData],
  );

  return (
    <>
      <Container>
        <AsideContent>
          <div className="slider-container">
            <Slider
              dots
              arrows={false}
              infinite
              autoplay
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
            >
              <div className="carousel-item">
                <img src={home_background} alt="Illustration" />

                <div>
                  <h4>Marcenas mattis egestas</h4>

                  <p>
                    Erdum et malesuada fames ac ante ileum primmer in faucibus
                    uspendisse porta.
                  </p>
                </div>
              </div>

              <div className="carousel-item">
                <img src={home_background} alt="Illustration" />

                <div>
                  <h4>Marcenas mattis egestas</h4>

                  <p>
                    Erdum et malesuada fames ac ante ileum primmer in faucibus
                    uspendisse porta.
                  </p>
                </div>
              </div>

              <div className="carousel-item">
                <img src={home_background} alt="Illustration" />

                <div>
                  <h4>Marcenas mattis egestas</h4>

                  <p>
                    Erdum et malesuada fames ac ante ileum primmer in faucibus
                    uspendisse porta.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </AsideContent>

        <Content>
          <AnimationContainer>
            <Header>
              <div>
                <h2>Invision</h2>
              </div>

              <h1>Welcome to Invision</h1>
            </Header>

            <Form data-testid="form-node" onSubmit={handleSubmit}>
              <FormInput
                htmlFor="email"
                className="input_email"
                hasError={!!emailError}
              >
                Users name or Email
                <input
                  type="email"
                  placeholder="Enter your user name or email"
                  id="email"
                  name="email"
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(event, 'email')
                  }
                  value={email}
                />
                <span>{emailError}</span>
              </FormInput>

              <FormInput
                htmlFor="password"
                className="input_password"
                hasError={passwordError}
              >
                Password
                <input
                  type="password"
                  placeholder="Your secret password"
                  id="password"
                  name="password"
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(event, 'password')
                  }
                  value={password}
                />
                <span>The password field can not be empty</span>
              </FormInput>

              <a href="forgot">Forgot password?</a>

              <div>
                <button data-testid="form-btn" type="submit">
                  Sign in
                </button>
              </div>
            </Form>

            <FooterContainer>
              <p>
                <span>Or</span>
              </p>

              <LoginWithGoogle
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                cookiePolicy="single_host_origin"
              />

              <div className="create_account">
                <span>
                  New <b>Invision</b>? <Link to="/signup">Create Account</Link>
                </span>
              </div>
            </FooterContainer>
          </AnimationContainer>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
