import { Container, Header, Form, Input, SubmitButton } from './AuthForm.styled';

export const AuthForm = () => {
    return (
      <Container>
        <Header>Registration</Header>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </Container>
    );
}