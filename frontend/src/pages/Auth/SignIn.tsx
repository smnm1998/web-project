import SignInForm from '../../components/Auth/SignInForm';

export default function SignIn(): JSX.Element {
    return (
        <div>
            <SignInForm onSubmit={(form) => console.log('Form submitted:', form)} />
        </div>
    );
}