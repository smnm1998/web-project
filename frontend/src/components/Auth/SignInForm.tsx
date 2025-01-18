import { useState, FormEvent } from 'react';

// 로그인 폼 데이터 타입 정의
interface SignInForm {
    email: string;
    password: string;
}

// 로그인 폼 컴포넌트 속성 정의
interface SignInProps {
    onSubmit: (form: SignInForm) => void;
}

const SignInForm = ({ onSubmit }: SignInProps): JSX.Element => {
    // 폼 데이터 상태 관리
    const [form, setForm] = useState<SignInForm>({
        email: '',
        password: '',
    });
    
    // 에러 메시지 상태 관리
    const [error, setError] = useState<string>('');

    // 폼 제출 핸들러 함수
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 폼 유효성 검사
        if (!form.email || !form.password) {
            setError('이메일과 비밀번호를 입력해주세요.');
            return;
        }
        onSubmit(form);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* 이메일 입력 필드 */}
                <div>
                    <label htmlFor="email">이메일</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={
                            (e) => {
                                setForm({
                                    ...form,
                                    email: e.target.value
                                });
                                setError('');
                            }
                        }
                    />
                </div>
                {/* 비밀번호 입력 필드 */}
                <div>
                    <label htmlFor="password">비밀번호</label>
                    <input 
                        id="password"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                password: e.target.value
                            });
                            setError('');
                        }}
                    />
                </div>
                {/* 에러 메시지 */}
                {error && <p style={{ color: 'red'}}>{error}</p>}
                <button type="submit">로그인</button>
            </form>
        </div>
    )
}

export default SignInForm;