import { useEffect, useState } from "react"
import styled from "styled-components"
import Sidebtn from "./Sidebtn"

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #9d9d9d;
`
const ImgSlice = styled.div`
    width: 100%;
    height: 600px;
    background-color: #a9a97f;
`
// 이미지 슬라이드 예시
const Slide = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
`
const PrevButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 38.5%;
    left: 10%;
    z-index: 1;
    cursor: pointer;
    & > svg {
        transform: rotate(180deg); 
    }
`

const NextButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 38.5%;
    right: 10%;
    cursor: pointer;
`
const Show = styled.div`
    width: 1500px;
    height: 600px;
    display: flex;
    border: 1px solid #000;
    align-items: center;
    overflow: hidden;
    margin: 0 50px;
`
const Img = styled.div`
    width: 1400px;
    height: 500px;
    flex-shrink: 0;
    text-align: center;
    margin: 0 50px;
    &:nth-child(1){
        background-color: aqua;
    }
    &:nth-child(2){
        background-color: #45d769;
    }
    &:nth-child(3){
        background-color: #232ea1;
    }
    &:nth-child(4){
        background-color: #bb1f84;
    }
    &:nth-child(5){
        background-color: #d6ce2d;
    }
` 

// 주류 종류 제목
const Main = styled.div`
    width: calc(100% - 440px);
    height: 100%;
    margin: 0 auto;
    background-color: azure;
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
`

// soju
const SojuContainer = styled.div`
    width: 100%;
    height: 300px;
    background-color: antiquewhite;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Soju = styled.div`
    width: 100%;
    height: 250px;
    position: relative;
    background-color: aquamarine;
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
`
const SojuTitle = styled.h1`
    font-size: 36px;
    padding: 10px 0;
    position: absolute;
    top: 70%;
    left: 21%;
    transform: translate(-50%, -50%);
`
const SojuContent = styled.span`
    font-size: 18px;
    padding: 10px 0;
    position: absolute;
    top: 87%;
    left: 22.8%;
    transform: translate(-50%, -50%);
    color: #909090;
`

// beer
const BeerContainer = styled.div`
    width: 100%;
    height: 300px;
    background-color: #bf9864;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Beer = styled.div`
    width: 100%;
    height: 250px;
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    background-color: aquamarine;
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
`
const BeerTitle = styled.h1`
    font-size: 36px;
    padding: 10px 0;
    position: absolute;
    top: 70%;
    left: 79%;
    transform: translate(-50%, -50%);
`
const BeerContent = styled.span`
    font-size: 18px;
    padding: 10px 0;
    position: absolute;
    top: 87%;
    left: 77.2%;
    transform: translate(-50%, -50%);
    color: #909090;
`

// makgeolli
const MakgeolliC = styled.div`
    width: 100%;
    height: 400px;
    background-color: #855f2d;
    
`
const Makgeolli = styled.div`
    width: 100%;
    height: 370px;
    margin-top: 100px;
    background-color: aquamarine;
    &:hover{
        transform: scale(1.1);
        transition: all 0.3s linear;
    }

`
const MakgeolliImg = styled.div`
    width: 800px;
    height: 250px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 5px;
    margin: 0 auto;
`
const MakgeolliTitle = styled.h1`
    font-size: 36px;
    padding: 10px 0;
    text-align: center;
    margin-top: 20px;
`
const MakgeolliContent = styled.span`
    font-size: 18px;
    padding: 10px 0;
    color: #909090;
    text-align: center;
    justify-content: center;
    display: flex;
`

// liquorm, new
const LiquorNewC = styled.div`
    width: 100%;
    height: 400px;
    margin-top: 50px;
    background-color: aquamarine;
`
const LiquorNew = styled.div`
    width: 100%;
    height: 270px;
    display: flex;
    justify-content: space-around;
`
const LiquorImg = styled.div`
    width: 200px;
    height: 250px;
    background-color: #29914a;
    border-radius: 10px;
    box-shadow: 5px 5px 5px;
    position: relative;
    overflow: hidden;

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
        content: 'Your Text Here';
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

const NewImg = styled.div`
    width: 200px;
    height: 250px;
    background-color: #29914a;
    border-radius: 10px;
    box-shadow: 5px 5px 5px;
    position: relative;
    overflow: hidden;

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
        content: 'Your Text Here';
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

const LiquorNewText = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`
const LiquorNewTitle = styled.h1`
    font-size: 36px;
    padding: 10px 0;
    text-align: center;
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
    background-color: #FFF;
`
const CollectionSub = styled.div`
    width: 100%;
    height: 700px;
    background-color: #141A2A;
    position: relative;
`

const CollectionText = styled.div`
    width: 480px;
    height: 90px;
    position: absolute;
    top: 20%;
    left: 13%;
`
const CTextTitle = styled.h1`
    font-size: 40px;
    color: #fff;
    padding: 16px 0;
`
const CTextSpan = styled.span`
    font-size: 16px;
    color: #909090;
    margin-top: 16px;
`

const CollectionImg = styled.div`
    width: 1200px;
    height: 450px;
    display: flex;
    position: absolute;
    top: 52%;
    left: 43%;
`
const CompanyImg = styled.div`
    width: 270px;
    height: 450px;
    margin-right: 40px;
    background-color: #5e5e5e;
    /* background-image:url('https://i.ibb.co/3493r17/cat.jpg'); */
`
const ShopImg = styled.div`
    width: 270px;
    height: 450px;
    margin-right: 40px;
    background-color: #5e5e5e;
`
const GuideImg = styled.div`
    width: 270px;
    height: 450px;
    background-color: #5e5e5e;
    margin-right: 40px;
`
const OutImg = styled.div`
    width: 270px;
    height: 450px;
    background-color: #5e5e5e;
`

const CImgTitle = styled.h1`
    font-size: 32px;
    text-align: center;
    margin-top: 100px;
    font-family: 'Inknut Antiqua';
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #fff;
`

const CImgSpan = styled.span`
    font-size: 32px;
    text-align: center;
    justify-content: center;
    display: flex;
    margin-top: 250px;
    vertical-align: middle;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #FAF1D7;
`
const CImgSpanIcon = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50px;
    background-color: #FAF1D7;
    & > svg {
        transform: rotate(90deg);    
    }
`

export default function Section () {
    const example = ['1','2','3','4','5'];

    const [imgArr, setImgArr] = useState(0); 
    const FIRST_SLIDE_INDEX = 0;
    const LAST_SLIDE_INDEX = example.length - 1;
    const MOVE_SLIDE_INDEX = 1; 

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
        }, 2000);

        return () => clearInterval(autoImg);
    }, [imgArr, example.length]);

    return(
        <Container>
            <ImgSlice>
                <Slide>
                    <PrevButton onClick={()=> moveSlide('prev')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"/></svg>
                    </PrevButton>
                    <Show>
                        {
                            example.map((item, index) => (
                                <Img 
                                    key={index} 
                                    style={{
                                        transform: `translateX(${-1500 * imgArr}px)`,
                                        transition: 'all 0.4s ease-in-out',
                                    }}>{item}
                                </Img>
                            ))
                        }
                    </Show>
                    <NextButton onClick={()=> moveSlide('next')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"/></svg>
                    </NextButton>
                </Slide>
            </ImgSlice>
            <Sidebtn />

            <Main>
                <SubTitle>주류 종류</SubTitle>
                <SojuContainer>
                    <Soju>
                        <SojuImg />
                        <SojuTitle>소주</SojuTitle>
                        <SojuContent>희석주 입니다.</SojuContent>
                    </Soju>
                </SojuContainer>
                <BeerContainer>
                    <Beer>
                        <BeerImg />
                        <BeerTitle>맥주</BeerTitle>
                        <BeerContent>곡료주 입니다.</BeerContent>
                    </Beer>
                </BeerContainer>
                <MakgeolliC>
                    <Makgeolli>
                        <MakgeolliImg />
                        <MakgeolliTitle>막걸리</MakgeolliTitle>
                        <MakgeolliContent>전통주 입니다.</MakgeolliContent>
                    </Makgeolli>
                </MakgeolliC>
                <LiquorNewC>
                    <LiquorNew>
                        <LiquorImg />
                        <NewImg />
                    </LiquorNew>
                    <LiquorNewText>
                        <LiquorNewTitle>증류주</LiquorNewTitle>
                        <LiquorNewTitle>신제품</LiquorNewTitle>
                    </LiquorNewText>
                    <LiquorNewText>
                        <LiquorNewSpan>증류주</LiquorNewSpan>
                        <LiquorNewSpan>신제품</LiquorNewSpan>
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
                        <CompanyImg>
                            <CImgTitle>Company</CImgTitle>
                            <CImgSpan>View more<CImgSpanIcon><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="#000" d="M13 18h-2v-8l-3.5 3.5l-1.42-1.42L12 6.16l5.92 5.92l-1.42 1.42L13 10zM12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"/></svg></CImgSpanIcon></CImgSpan>
                        </CompanyImg>
                        <ShopImg>
                            <CImgTitle>Shop</CImgTitle>
                            <CImgSpan>View more<CImgSpanIcon><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="#000" d="M13 18h-2v-8l-3.5 3.5l-1.42-1.42L12 6.16l5.92 5.92l-1.42 1.42L13 10zM12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"/></svg></CImgSpanIcon></CImgSpan>
                        </ShopImg>
                        <GuideImg>
                            <CImgTitle>Guide</CImgTitle>
                            <CImgSpan>view more<CImgSpanIcon><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="#000" d="M13 18h-2v-8l-3.5 3.5l-1.42-1.42L12 6.16l5.92 5.92l-1.42 1.42L13 10zM12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"/></svg></CImgSpanIcon></CImgSpan>
                        </GuideImg>
                        <OutImg />
                    </CollectionImg>
                </CollectionSub>
            </Collection>
        </Container>
    )
}