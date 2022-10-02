import { useContext } from "react";
import Wrapper from "../../assets/wrappers/Leaderboard";
import { DataContext } from "../../context/DataContext";
import LeaderboardItem from "../leaderboarditem/LeaderboardItem";
import TopLeaders from "../topleaders/TopLeaders";

const Leaderboard = () => {
  const { dataList } = useContext(DataContext);
    return (
      <Wrapper>
         {dataList.length ? (
         <TopLeaders list={dataList.slice(0,3)}/>
         ):(<div></div>)
          }
         <div className="leaderboard-list-container">
            <ul className="item-wrapper">
              {dataList.length ? (
                dataList.map((data) => <LeaderboardItem key={data.userID} board={data}/>)
              ) : (
                <li>no data</li>
              )}
            </ul>
          </div>
      </Wrapper>
    );
  };
  export default Leaderboard;