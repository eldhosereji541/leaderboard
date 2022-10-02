import styled from 'styled-components';

const Wrapper = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
will-change: transform;
transition: all 0.3s ease-in;

.item__avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
  }
  
  .item__avatar__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  .item__score {
    font-family: monospace;
    flex: 1;
    text-align: right;
  }
  
  .item__avatar,
  .item__name,
  .item__score {
    margin-left: 10px;
  }
`
export default Wrapper;