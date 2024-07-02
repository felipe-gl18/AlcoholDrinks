import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const Introduce = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 160px;
`
const IntroduceTitle = styled.h1`
    width: 230px;
    height: 80px;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.active ? '#87CEEB' : '#FFFFFF')}; /* SkyBlue when active */
    box-shadow: 5px 3px 0px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    margin-right: 70px;
    font-size: 32px;
    cursor: pointer;
    transition: background 0.3s ease;
    color: #000;
`;


const Summary = styled.div`
    width: calc(100% - 440px);
    height: 100%;
    margin: 0 auto;
    margin-bottom: 180px;
`
const SummaryText = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 90px;
`
const SummaryTitle = styled.h1`
    font-size: 48px;
    margin-bottom: 20px;
`
const SummaryContent = styled.span`
    font-size: 20px;
    color: #909090;
    line-height: 1.4;
`

const SummaryImg = styled.div`
    width: 100%;
    height: 150px;
`
const SummaryKImg = styled.div`
    float: left;
    width: 700px;
    height: 130px;
    background-image: url("/img/story/koreasoju.png");
    background-size: cover;
    background-position: center;
`
const SummaryTImg = styled.div`
    float: left;
    width: 670px;
    height: 120px;
    background-image: url("/img/story/traditional.png");
    background-position: center;
`
const SummaryGImg = styled.div`
    float: left;
    width: 600px;
    height: 180px;
    background-image: url("/img/story/global.png");
    background-position: center;
    background-size: cover;
`
const SummaryTImgContent = styled.span`
    font-size: 20px;
    color: #909090;
    line-height: 1.4;
    margin-left: 30px;
`
const SummaryGImgContent = styled.span`
    font-size: 20px;
    color: #909090;
    line-height: 1.4;
    margin-left: 100px;
`

export default function Story () {

    const location = useLocation();
    const [activeTitle, setActiveTitle] = useState('');

    useEffect(() => {
        switch (location.pathname) {
            case '/story':
                setActiveTitle('개요');
                break;
            default:
                setActiveTitle('');
        }
    }, [location.pathname]);

    const handleClick = (title) => {
        setActiveTitle(title);
    };

    return(
        <Container>
            <Introduce>
                <Link to='/story' style={{ textDecoration: "none", color: "#000"}}>
                    <IntroduceTitle
                        active={activeTitle === '개요'}
                        onClick={() => handleClick('개요')}
                    >
                        개요
                    </IntroduceTitle>
                </Link>

                <IntroduceTitle
                    active={activeTitle === '소주의 역사'}
                    onClick={() => handleClick('소주의 역사')}
                >
                    <Link to='/story/soju' style={{ textDecoration: "none", color: "#000"}}>
                        소주의 역사
                    </Link>
                </IntroduceTitle>
                <IntroduceTitle
                    active={activeTitle === '맥주의 역사'}
                    onClick={() => handleClick('맥주의 역사')}
                >
                    <Link to='/story/beer' style={{ textDecoration: "none", color: "#000"}}>
                        맥주의 역사
                    </Link>
                </IntroduceTitle>
                <IntroduceTitle
                    active={activeTitle === '막걸리 역사'}
                    onClick={() => handleClick('막걸리 역사')}
                >  
                    <Link to='/story/makgeolli' style={{ textDecoration: "none", color: "#000"}}>
                        막걸리 역사
                    </Link>
                </IntroduceTitle>
            </Introduce>
            <Summary>
                <SummaryText>
                    <SummaryTitle>사이트 제작 의도</SummaryTitle>
                    <SummaryContent>사이트를 제작 한 이유는 평소 주류에 관심이 많았고 최근에 술이 많이 나왔는데요. 많은 사람들이 새로운 제품을 알지 못하고 도수는 어느 정도인지 무슨 맛인지를 모르는 상태로 
                        주류를 고르는 것에 불편함을 직접 느끼게 되었습니다. 주류에 관하여 이야기를 해보면 많은 사람들이 술 종류가 많으니까 다 똑같은 술이라고 생각하고 드시는 분들도 꽤 많이 계셔가지고 술 종류도 
                        소개할 겸 더 나아가 외국인 분들에게 한국 술에 대해서 알려드리고 싶어서 제작하게 되었습니다.
                    </SummaryContent>
                </SummaryText>
                <SummaryText>
                    <SummaryTitle>대한민국 주류 시장</SummaryTitle>
                    <SummaryImg>
                        <SummaryKImg />
                        <SummaryContent>국내 주류 시장 규모입니다.</SummaryContent>
                    </SummaryImg>
                    <SummaryImg>
                        <SummaryTImg />
                        <SummaryTImgContent>국내 전통주 시장 규모입니다.</SummaryTImgContent>
                    </SummaryImg>
                    <SummaryImg>
                        <SummaryGImg />
                        <SummaryGImgContent>글로벌 시장 규모입니다.</SummaryGImgContent>
                    </SummaryImg>
                </SummaryText>
            </Summary>
        </Container>
    );
}