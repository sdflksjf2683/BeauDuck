import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMemberId } from './MemberSlice';

const NaverLogin = () => {
  const dispatch = useDispatch();
  const code = new URL(window.location.href).searchParams.get('code');
  const state = new URL(window.location.href).searchParams.get('state');
  const [cookies, setCookie, removeCookie] = useCookies(['cookie_name']);

  const navigate = useNavigate();
  const getToken = async () => {
      axios
        .get(`http://i8b306.p.ssafy.io:8080/naver/callback?code=${code}&state=${state}`)
        .then((res) => {
          console.log('시작_확인용');
          console.log(res.data.data);
          localStorage.setItem('refreshToken', res.data.refreshToken);
          const accessToken = res.data.data.accessToken;
          const expireDate = new Date();
          expireDate.setMinutes(expireDate.getMinutes());
          setCookie(
            'accessToken',
            {accessToken},
            {
              path: '/',
              expires: expireDate,
            },
          );
          alert('인증이 정상적으로 완료되었습니다');
          Login(accessToken);
        })
        return(
          navigate('/signup')
        )
          .catch((error) => {
            console.log('에러_확인용')
            console.log(error);
          });  
        };
        
        // alert('xxxxx');
        
      const Login = async (accessToken) => {
          axios
            .get(`http://i8b306.p.ssafy.io:8080/naver/login?accessToken=${accessToken}`)
            .then((res) => {
            console.log('시작2_확인용')
            console.log(res.data.data);
            })
            .catch((error) => {
              console.log('에러_확인용')
              console.log(error);
            });
        };
        const Logout = async (accessToken) => {
          axios
            .get(`http://i8b306.p.ssafy.io:8080/naver/logout?accessToken=${accessToken}`)
            .then((res) => {
            console.log('시작')
            console.log(res.data.status);
            removeCookie('accessToken');
            localStorage.removeItem('refreshToken');
            })
            return(
              navigate('/'))
            
            .catch((error) => {
              console.log(error);
            });
        };


  useEffect(() => {
    getToken();
  }, []);

  return <div></div>;
};

export default NaverLogin;
