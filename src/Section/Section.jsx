import { useEffect, useState } from "react"
import styled from "styled-components"
import Sidebtn from "./Sidebtn"
import { Link } from "react-router-dom"

const Container = styled.div`
    width: 100%;
    height: 100%;
`
const ImgSlice = styled.div`
    width: 100%;
    height: 60vh; 

    @media (max-width: 768px) {
        display: none;
    }
`;

// 이미지 슬라이드 예시
const Slide = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;

const PrevButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 40%; 
    left: 5%;
    transform: translateY(-50%); 
    z-index: 1;
    cursor: pointer;

    & > svg {
        transform: rotate(180deg);
        color: #858585;
    }
`;

const NextButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 40%; 
    right: 5%;
    transform: translateY(-50%); 
    cursor: pointer;
    color: #858585;
`;

const Show = styled.div`
    width: 90vw; 
    height: 60vh; 
    display: flex;
    align-items: center;
    overflow: hidden;
    margin: 0 auto;
`;

const Img = styled.div`
    width: 100%; 
    height: 100%; 
    flex-shrink: 0;
    text-align: center;
    background-size: cover;
    background-position: center;

    &:nth-child(1) {
        background-image: url("/img/home/chamiseulpst.jpg");
    }
    &:nth-child(2) {
        background-image: url("/img/home/terrapst.jpg");
    }
    &:nth-child(3) {
        background-image: url("/img/home/makgeollipst.jpg");
    }
    &:nth-child(4) {
        background-image: url("/img/home/liquorjinropst.jpg");
    }
    &:nth-child(5) {
        background-image: url("/img/home/newpst.jpg");
    }
`;

const Main = styled.div`
    width: calc(100% - 440px);
    height: 100%;
    margin: 0 auto;
    white-space: nowrap;
    
    @media (max-width: 768px) {
        width: 100%; 
    }
`
const SubTitle = styled.h1`
    font-size: 64px;
    text-align: center;
    align-items: center;
    margin-top: 50px;
    padding: 20px;
    &:after{
        content: "";
        display: block;
        width: 210px;
        border-bottom: 2px solid #000;
        margin: 10px auto;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
        text-align: center;
        margin-top: 50px;
        padding: 10px;
    }
`

// soju
const SojuContainer = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 768px) {
        margin-top: 50px;
    }
`
const Soju = styled.div`
    width: 100%;
    height: 250px;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 258px;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: all 0.5s linear;
        border-radius: 10px;
        visibility: hidden;
    }

    &::after {
        content: '국내 소주 브랜드를 소개해 드립니다.';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 18px;
        opacity: 0;
        transition: opacity 0.3s;
        visibility: hidden;
        text-align: center;
    }

    &:hover::before, &:hover::after {
        opacity: 1;
        visibility: visible;
    }
    &:hover{
        transform: scale(1.1);
        transition: all 0.3s linear;
    }
`
const SojuImg = styled.div`
    width: 200px;
    height: 250px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 5px;
    float: left;
    border: 1px solid #000;
    color: #000;
    background-image: url("/img/home/chamiseul.png");
    background-size: cover;
    background-position: center;
`
const SojuTitle = styled.h1`
    font-size: 36px;
    padding: 10px 0;
    position: absolute;
    top: 70%;
    left: 20%;  
    transform: translate(-50%, -50%);
    color: #000;
    @media (max-width: 768px) {
        left: 52%;
    }
`
const SojuContent = styled.span`
    font-size: 18px;
    padding: 10px 0;
    position: absolute;
    top: 87%;
    left: 22%; 
    transform: translate(-50%, -50%);
    color: #909090;
    @media (max-width: 768px) {
        left: 56%;
    }
`

// beer
const BeerContainer = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 768px) {
        margin-top: 50px;
    }
`
const Beer = styled.div`
    width: 100%;
    height: 250px;
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 258px;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: all 0.5s linear;
        border-radius: 10px;
        visibility: hidden;
    }

    &::after {
        content: '국내 맥주 브랜드를 소개해 드립니다.';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 18px;
        opacity: 0;
        transition: opacity 0.3s;
        visibility: hidden;
        text-align: center;
    }

    &:hover::before, &:hover::after {
        opacity: 1;
        visibility: visible;
    }
    &:hover{
        transform: scale(1.1);
        transition: all 0.3s linear;
    }
`
const BeerImg = styled.div`
    width: 200px;
    height: 250px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 5px;
    float: left;
    border: 1px solid #000;
    color: #000;
    background-image: url("/img/home/terra.jpg");
    background-size: cover;
    background-position: center;
`
const BeerTitle = styled.h1`
    font-size: 36px;
    padding: 10px 0;
    position: absolute;
    top: 70%;
    left: 80%; 
    transform: translate(-50%, -50%);
    color: #000;
    @media (max-width: 768px) {
        left: 48%;
    }
`
const BeerContent = styled.span`
    font-size: 18px;
    padding: 10px 0;
    position: absolute;
    top: 87%;
    left: 77%;  
    transform: translate(-50%, -50%);
    color: #909090;
    @media (max-width: 768px) {
        left: 44%;
    }
`

// makgeolli
const MakgeolliC = styled.div`
    width: 100%;
    height: 400px;
    
`
const Makgeolli = styled.div`
    width: 100%;
    height: 370px;
    margin-top: 100px;
`
const MakgeolliImg = styled.div`
    width: 800px;
    height: 250px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 5px;
    margin: 0 auto;
    border: 1px solid #000;
    color: #000;
    background-image: url("/img/home/makgeolli.jpg");
    background-size: cover;
    background-position: center;

    @media (max-width: 768px) {
        width: 100%;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 258px;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: all 0.5s linear;
        border-radius: 10px;
        visibility: hidden;
    }

    &::after {
        content: '국내 막걸리 브랜드를 소개해 드립니다.';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 18px;
        opacity: 0;
        transition: opacity 0.3s;
        visibility: hidden;
        text-align: center;
    }

    &:hover::before, &:hover::after {
        opacity: 1;
        visibility: visible;
    }
    &:hover{
        transform: scale(1.1);
        transition: all 0.3s linear;
    }
`
const MakgeolliTitle = styled.h1`
    font-size: 36px;
    padding: 10px 0;
    text-align: center;
    margin-top: 20px;
    color: #000;
`
const MakgeolliContent = styled.span`
    font-size: 18px;
    padding: 10px 0;
    color: #909090;
    text-align: center;
    justify-content: center;
    display: flex;
`

// liquorm
const LiquorNewC = styled.div`
    width: 100%;
    height: 400px;
    margin-top: 50px;
    margin-bottom: 50px;
`
const LiquorNew = styled.div`
    width: 100%;
    height: 270px;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
`
const LiquorImg = styled.div`
    width: 200px;
    height: 250px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px;
    position: relative;
    color: #000;
    border: 1px solid #000;
    background-image: url("/img/home/liquorjinro.jpg");
    background-size: cover;
    background-position: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: all 0.5s linear;
        border-radius: 10px;
        visibility: hidden;
    }

    &::after {
        content: '국내 증류주 브랜드를 소개해 드립니다.';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 18px;
        opacity: 0;
        transition: opacity 0.3s;
        visibility: hidden;
        text-align: center;
    }

    &:hover::before, &:hover::after {
        opacity: 1;
        visibility: visible;
    }  
`;

// new
const NewImg = styled.div`
    width: 200px;
    height: 250px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px;
    position: relative;
    overflow: hidden;
    color: #000;
    border: 1px solid #000;
    background-image: url("/img/home/new.jpg");
    background-size: cover;
    background-position: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: all 0.5s linear;
        border-radius: 10px;
        visibility: hidden;
    }

    &::after {
        content: '신상품을 소개해 드립니다.';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 18px;
        opacity: 0;
        transition: opacity 0.3s;
        visibility: hidden;
        text-align: center;
    }

    &:hover::before, &:hover::after {
        opacity: 1;
        visibility: visible;
    }
`

// liquor, new 설명
const LiquorNewText = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`
const LiquorNewTitle = styled.h1`
    font-size: 36px;
    padding: 10px 0;
    text-align: center;
    color: #000;

`
const LiquorNewSpan = styled.span`
    font-size: 18px;
    padding: 10px 0;
    color: #909090;
    text-align: center;
    justify-content: center;
    display: flex;
`

// collection
const Collection = styled.div`
    width: 100%;
    height: 900px;

    @media (max-width: 768px) {
        height: auto; 
    }
`;

const CollectionSub = styled.div`
    width: 100%;
    height: 700px;
    background-color: #141A2A;
    position: relative;
`;

const CollectionText = styled.div`
    width: 60%;
    max-width: 550px;
    height: auto; 
    position: absolute;
    top: 10%; 
    left: 5%; 

    @media (max-width: 768px) {
        width: 90%; 
        left: 5%; 
        top: 5%; 
    }
`;

const CTextTitle = styled.h1`
    font-size: 40px;
    color: #fff;
    padding: 16px 0;

    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

const CTextSpan = styled.span`
    font-size: 16px;
    color: #909090;
    margin-top: 16px;

    @media (max-width: 768px) {
        font-size: 14px; 
    }
`;

const CollectionImg = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    position: absolute;
    top: 52%; 
    left: 43%; 

    @media (max-width: 768px) {
        flex-direction: column; 
        align-items: center; 
        top: 15%; 
        height: auto;
        padding: 20px 0;
        transform: translateX(-43%);
    }
`;

const CompanyImg = styled.div`
    width: 270px;
    height: 450px;
    margin-right: 40px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 13, 0.6)), url("/img/home/company.jpg");
    background-size: cover;
    background-position: center;

    @media (max-width: 768px) {
        width: 90%; 
        height: 200px; 
        margin: 10px 0; 
    }
`;

const ShopImg = styled.div`
    width: 270px;
    height: 450px;
    margin-right: 40px;
    background-image: linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 13, 0.6)), url("/img/home/shop.jpg");
    background-size: cover;
    background-position: center;

    @media (max-width: 768px) {
        width: 90%; 
        height: 200px; 
        margin: 10px 0; 
    }
`

const GuideImg = styled.div`
    width: 270px;
    height: 450px;
    margin-right: 40px;
    background-image: linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 13, 0.6)), url("/img/home/guide.jpg");
    background-size: cover;
    background-position: center;

    @media (max-width: 768px) {
        width: 90%;
        height: 200px;
        margin: 10px 0;
    }
`

const OutImg = styled.div`
    width: 270px;
    height: 450px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 13, 0.6)), url("/img/home/out.jpg");
    background-size: cover;
    background-position: center;
    
    @media (max-width: 768px) {
        display: none;
    }
`;

const CImgTitle = styled.h1`
    font-size: 32px;
    text-align: center;
    margin-top: 100px;
    font-family: 'Inknut Antiqua';
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #fff;

    @media (max-width: 768px) {
        font-size: 24px; 
    }
`;

const CImgSpan = styled.span`
    font-size: 32px;
    text-align: center;
    justify-content: center;
    display: flex;
    margin-top: 250px; 
    vertical-align: middle;
    align-items: center;
    gap: 1rem;
    color: #FAF1D7;

    @media (max-width: 768px) {
        font-size: 24px; 
        margin-top: 20px; 
    }
`;

const CImgSpanIcon = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50px;
    background-color: #FAF1D7;

    & > svg {
        transform: rotate(90deg);    
    }
`;

// popup
const Popup = styled.div`
    font-family: Arial, sans-serif;
    text-align: center;
`;

const PopupOverlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        display: none;
    }

`;

const PopupContent = styled.div`
    background-color: #fff;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 700px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    text-align: center;
    position: relative;

    @media (max-width: 768px) {
        display: none;
    }

`;

const CloseButton = styled.span`
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;

    &:hover,
    &:focus {
        color: #000;
    }
`;

const Content = styled.div`
    margin-top: 80px;
    margin-bottom: 80px;
`

const ContentSpan = styled.span`
    font-size: 20px;
    line-height: 1.6;
`
const ContextTitle = styled.h2`
    font-size: 28px;
    font-weight: 700;
`


export default function Section () {

    const imgSlide = ['','','','',''];
    const [imgArr, setImgArr] = useState(0); 
    const FIRST_SLIDE_INDEX = 0;
    const LAST_SLIDE_INDEX = imgSlide.length - 1;
    const MOVE_SLIDE_INDEX = 1; 
    const [isOpen, setIsOpen] = useState(false);

    const moveSlide = (value) => {
        if(value === 'next'){
            setImgArr((prevState) =>
                prevState < LAST_SLIDE_INDEX ? prevState + MOVE_SLIDE_INDEX : FIRST_SLIDE_INDEX
            )
        }
        if(value === 'prev'){
            setImgArr((prevState) =>
                prevState > FIRST_SLIDE_INDEX ? prevState - MOVE_SLIDE_INDEX : LAST_SLIDE_INDEX
            )
        }
    }    

    useEffect(() => {
        const autoImg = setInterval(() => {
            moveSlide('next');
        }, 3000);

        return () => clearInterval(autoImg);
    }, [imgArr, imgSlide.length]);
    
    useEffect(() => {
        const popupClose = sessionStorage.getItem('popupClosed');
        if(!popupClose){
            setIsOpen(true);
        }
    }, [])

    const closePopup = () => {
        setIsOpen(false);
        sessionStorage.setItem('popupClosed', 'true');
    }

    const imgError = (e) => {
        e.target.src = `/imgnone.png`
    }
    
    return(
        <Container>
            <Popup>
                {
                    isOpen && (
                        <PopupOverlay>
                            <PopupContent aria-labelledby="팝업 내용">
                                <CloseButton onClick={closePopup} aria-label="팝업 닫기" role="button">&times;</CloseButton>
                                <Content>
                                    <ContentSpan>
                                        <ContextTitle id="팝업 내용">필독해 주세요!! 읽어주셔서 감사합니다.</ContextTitle><br /><br />
                                        처음 만든 페이지다 보니 오류나 불편한 사항이 있을 수 있습니다. <br />이 점은 먼저 사죄드립니다.<br /><br />
                                        오류나 불편한 사항, 데이터 추가 요청 등이 있을 시 저에게 말씀해 주시면 <br />
                                        신속하게 해결하여 더 나은 서비스로 보답하겠습니다.<br /><br />
                                        왼쪽에 있는 비행기 모양 아이콘을 클릭하시면 저에게 메일을 발송하실 수 있습니다.<br /><br />
                                        현재 데이터는 무료 버전으로 제공되고 있어 자동 업데이트가 되지 않습니다. <br />이럴 경우, 페이지를 새로 고침하시면 데이터가 정상적으로 작동합니다. <br /><br />
                                        다시 한번 사이트에 방문해 주셔서 감사드립니다.
                                    </ContentSpan>
                                </Content>
                            </PopupContent>
                        </PopupOverlay> 
                    )
                }
            </Popup>
            <ImgSlice>
                <Slide>
                    <PrevButton onClick={()=> moveSlide('prev')} aria-label="이전 버튼" role="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"/></svg>
                    </PrevButton>
                    <Show>
                        {
                            imgSlide.map((item, index) => (
                                <Img 
                                    key={index} 
                                    style={{
                                        transform: `translateX(${(-100 * imgArr)}%)`, 
                                        transition: 'all 0.4s ease-in-out',
                                    }}>{item}
                                </Img>
                            ))
                        }
                    </Show>
                    <NextButton onClick={()=> moveSlide('next')} aria-label="다음 버튼" role="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"/></svg>
                    </NextButton>
                </Slide>
            </ImgSlice>
            <Sidebtn />

            <Main>
                <SubTitle>주류 종류</SubTitle>
                <Link to='/brand/soju' style={{ textDecoration: "none"}} aria-label="소주 페이지로 이동">
                    <SojuContainer>
                        <Soju>
                            <SojuImg alt="소주 이미지" onError={imgError} />
                            <SojuTitle>소주</SojuTitle>
                            <SojuContent>희석주 입니다.</SojuContent>
                        </Soju>
                    </SojuContainer>
                </Link>
                <Link to='/brand/beer' style={{ textDecoration: "none"}} aria-label="맥주 페이지로 이동">
                    <BeerContainer>
                        <Beer>
                            <BeerImg alt="맥주 이미지" onError={imgError} />
                            <BeerTitle>맥주</BeerTitle>
                            <BeerContent>곡료주 입니다.</BeerContent>
                        </Beer>
                    </BeerContainer>
                </Link>
                <Link to='/brand/makgeolli' style={{ textDecoration: "none"}} aria-label="막걸리 페이지로 이동">
                    <MakgeolliC>
                        <Makgeolli>
                            <MakgeolliImg alt="막걸리 이미지" onError={imgError} />
                            <MakgeolliTitle>막걸리</MakgeolliTitle>
                            <MakgeolliContent>전통주 입니다.</MakgeolliContent>
                        </Makgeolli>
                    </MakgeolliC>
                </Link>

                <LiquorNewC>
                    <LiquorNew>
                        <Link to='/brand/liquor' style={{ textDecoration: "none"}} aria-label="증류주 페이지로 이동">
                            <LiquorImg alt="증류주 이미지" onError={imgError} />
                        </Link>
                        <Link to='/brand/new' style={{ textDecoration: "none"}} aria-label="신제품 페이지로 이동">
                            <NewImg alt="신제품 이미지" onError={imgError} />
                        </Link>
                    </LiquorNew>
                    <LiquorNewText>
                        <LiquorNewTitle>증류주</LiquorNewTitle>
                        <LiquorNewTitle>신제품</LiquorNewTitle>
                    </LiquorNewText>
                    <LiquorNewText>
                        <LiquorNewSpan>증류주 입니다.</LiquorNewSpan>
                        <LiquorNewSpan>신제품 입니다.</LiquorNewSpan>
                    </LiquorNewText>
                </LiquorNewC>
            </Main>
            <Collection>
                <CollectionSub>
                    <CollectionText>
                        <CTextTitle>회사 소개 판매처 주류 가이드</CTextTitle>
                        <CTextSpan>주류 회사 소개와 제품 판매처 및 상식으로 알아두는 주류 가이드</CTextSpan>
                    </CollectionText>
                    <CollectionImg>
                        <CompanyImg onError={imgError}>
                            <Link to='/company' style={{ textDecoration: "none"}} aria-label="주류 회사 페이지로 이동">
                                <CImgTitle>Company</CImgTitle>
                                <CImgSpan>View more<CImgSpanIcon><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="#000" d="M13 18h-2v-8l-3.5 3.5l-1.42-1.42L12 6.16l5.92 5.92l-1.42 1.42L13 10zM12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"/></svg></CImgSpanIcon></CImgSpan>
                            </Link>
                        </CompanyImg>
                        <ShopImg onError={imgError}>
                            <Link to='/shop' style={{ textDecoration: "none"}} aria-label="판매처 페이지로 이동">
                                <CImgTitle>Shop</CImgTitle>
                                <CImgSpan>View more<CImgSpanIcon><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="#000" d="M13 18h-2v-8l-3.5 3.5l-1.42-1.42L12 6.16l5.92 5.92l-1.42 1.42L13 10zM12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"/></svg></CImgSpanIcon></CImgSpan>
                            </Link>
                        </ShopImg>
                        <GuideImg onError={imgError}>
                            <Link to='/guide' style={{ textDecoration: "none"}} aria-label="주류 가이드 페이지로 이동">
                                <CImgTitle>Guide</CImgTitle>
                                <CImgSpan>view more<CImgSpanIcon><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="#000" d="M13 18h-2v-8l-3.5 3.5l-1.42-1.42L12 6.16l5.92 5.92l-1.42 1.42L13 10zM12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"/></svg></CImgSpanIcon></CImgSpan>
                            </Link>
                        </GuideImg>
                        <OutImg />
                    </CollectionImg>
                </CollectionSub>
            </Collection>
        </Container>
    )
}