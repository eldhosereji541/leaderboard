import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    position: relative;
    min-height: 120px;
    padding-top: 1rem;

    .leader {
        display: flex;
    }
    .leaderName {
        position: absolute;
        text-align: center;
        color: white;
        left: 50%;
        transform: translateX(-50%);
        font-size: 22px;
      }
    .image {
        border-radius: 50%;
        border: 3px solid #b159ffcc;
        height: 58px;
        object-fit: cover;
        width: 58px;
    }
    .crown{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    
        svg {
            width: 3rem;
        }
    }

    .leader:nth-child(1) {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        &:after {
            content: '1';
            width: 30px;
            height: 30px;
            background: #ffc500;
            border-radius: 50%;
            position: absolute;
            right: 0;
            font-family: sans-serif;
            text-align: center;
            line-height: 30px;
            font-weight: 700;
            box-shadow: 1px 1px 4px black;
        }
        .image {
            width: 100px;
            height: 100px;
        }

        .crown {
            top: -20%;
            svg {
            fill: #ffc500;
            }
        }

    }

    .leader:nth-child(2) {
        position: absolute;
        left: 15%;
        transform: translateX(-15%);
        bottom: -20%;

        &:after {
            content: '2';
            width: 30px;
            height: 30px;
            background: #d4d4d4;
            border-radius: 50%;
            position: absolute;
            right: 0;
            font-family: sans-serif;
            text-align: center;
            line-height: 30px;
            font-weight: 700;
            box-shadow: 1px 1px 4px black;
        }

        .image {
            width: 80px;
            height: 80px;
        }

        .crown {
            top: -25%;

            svg {
            fill: #d4d4d4;
            }
        }
    }

    .leader:nth-child(3) {
        position: absolute;
        left: 85%;
        transform: translateX(-85%);
        bottom: -20%;
        &:after {
            content: '3';
            width: 30px;
            height: 30px;
            background: #ab6528;
            border-radius: 50%;
            position: absolute;
            right: 0;
            font-family: sans-serif;
            text-align: center;
            line-height: 30px;
            font-weight: 700;
            box-shadow: 1px 1px 4px black;
        }

        .image {
            width: 80px;
            height: 80px;
        }

        .crown {
            top: -25%;
            svg {
            fill: #ab6528;
            }
        }
    }
  }`
export default Wrapper;