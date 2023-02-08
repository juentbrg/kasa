import styled from 'styled-components'
import { useState } from 'react'
import arrow from '../../assets/arrow.png'
import colors from '../../utils/colors'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledCollapse = styled.div`
  height: 30px;
  background-color: ${colors.primary};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 0 18px;
`

const StyledColapseOpen = styled.div`
  background: #f7f7f7;
  border-radius: 5px;
  margin-top: -10px;
  padding: 25px 18px 10px 18px;
  z-index: 0;
`

const StyledTitle = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-size: 13px;
`

const StyledParagraphOpen = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: ${colors.primary};
`

const StyledArrow = styled.img`
  transition: transform 0.3s ease;
  transform: rotate(${(props) => (props.isOpen ? 0 : 180)}deg);
  height: 9px;
  width: 15px;
`

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false)

  return !isOpen ? (
    <StyledContainer>
      <StyledCollapse onClick={() => setIsOpen(true)}>
        <StyledTitle>{title}</StyledTitle>
        <StyledArrow src={arrow} alt="arrow" />
      </StyledCollapse>
    </StyledContainer>
  ) : (
    <StyledContainer>
      <StyledCollapse onClick={() => setIsOpen(false)}>
        <StyledTitle>{title}</StyledTitle>
        <StyledArrow src={arrow} alt="arrow" isOpen={isOpen} />
      </StyledCollapse>
      <StyledColapseOpen>
        <StyledParagraphOpen>{description}</StyledParagraphOpen>
      </StyledColapseOpen>
    </StyledContainer>
  )
}

export default Collapse
