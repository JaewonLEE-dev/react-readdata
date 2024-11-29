import React, { useEffect } from 'react';
import axios from 'axios';

// 환경에 따라 다른 API URL 설정
const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'http://postdatatowebelb-511613899.ap-northeast-2.elb.amazonaws.com' // 로드 밸런서 DNS
    : 'http://localhost:2345/'; // 개발 환경에서의 URL

const FetchData = () => {
    useEffect(() => {
        // 데이터를 가져오는 함수
        const fetchData = async () => {
            try {
                const response = await axios.get(API_URL);
                console.log(response.data); // 서버에서 받은 데이터를 콘솔에 출력
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // 컴포넌트가 처음 렌더링될 때 한 번 실행

    return <div>Check the console for server data!</div>;
};

export default FetchData;


