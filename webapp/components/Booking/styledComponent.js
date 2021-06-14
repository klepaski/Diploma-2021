import styled, {css} from "styled-components";
import { space } from 'styled-system'

export const Title = styled.div`
    ${space};
    font-size: 28px;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 5px
`;
export const SubTitle = styled.div`
    ${space};
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
`;
export const WrapBookTop = styled.div`
    ${space};
    display: flex;
`;
export const WrapBookTopLeft = styled.div`
    ${space};
    width: 60%;
`;
export const WrapBookTopRight = styled.div`
    ${space};
    width: 40%;
    padding-left: 20px;
    text-align: center;
`;
export const BookCategory = styled.div`
    ${space};
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
`;
export const BookTitle = styled.div`
    ${space};
    font-size: 20px;
    color: #4A4A4A;
`;
export const BookOfferImg = styled.img`
    ${space};
    height: 70px;
`;
export const BookLabel = styled.div`
    ${space};
    color: rgba(1, 1, 1, 0.7);
    font-size: 16px;
    margin-bottom: 10px;
`;
export const BookText = styled.div`
    ${space};
    color: rgba(1, 1, 1, 0.5);
    font-size: 16px;
`;
export const BookWrapPrice = styled.div`
    ${space};
    display: flex;
    justify-content: space-between;
`;
export const BookPriceItem = styled.div`
    ${space};
    
`;
export const BookPriceValue = styled.div`
    ${space};
  
`;
export const BookLabelForm = styled.div`
    ${space};
    font-size: 16px;
    margin-bottom: 10px;
`;


