import React, { FC } from 'react';
import Wrapper from '../../assets/wrappers/Board';

export type Board = {
  userID: string,
  displayName: string,
  picture: string,
  score: number,
}
const LeaderboardItem:FC<{board:Board}> = ({board}) => {  
    return (
      <Wrapper>
        <div className="item__avatar">
          <img
            className="item__avatar__img"
            src={board.picture}
            alt={board.displayName}
          />
        </div>
        <span className="item__name">{board.displayName}</span>
        <span className="item__score">{board.score}</span>
    </Wrapper>
    );
  };
  
  export default LeaderboardItem;