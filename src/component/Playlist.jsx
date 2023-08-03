import React, { useContext, useState } from "react";
import { useImmer } from "use-immer";
import { ColorChangeContext } from "../hooks/ColorChangeProvider";

export default function Playlist() {
  const { toRedMode, toBlueMode, toGreenMode } = useContext(ColorChangeContext);
  const classNameSelec = toRedMode
    ? "toredmode"
    : toBlueMode
    ? "tobluemode"
    : toGreenMode
    ? "togreenmode"
    : "";
  const playlistclass = `playlistcontainer ${classNameSelec}`;
  const [playlists, updatePlaylist] = useImmer(initialList);
  const handleedit = () => {
    const prevtitle = prompt("수정하려는 노래 제목은 무엇인가요?");
    const edittitle = prompt("올바른 노래의 제목을 입력해주세요.");
    const editartist = prompt("올바른 가수의 이름을 입력해주세요.");
    updatePlaylist((playlists) => {
      const list = playlists.lists.find((l) => l.title === prevtitle);
      list.title = edittitle;
      list.artist = editartist;
      console.log(list);
    });
  };
  const handleadd = () => {
    const title = prompt("추가하고 싶은 노래의 제목을 입력해주세요.");
    const artist = prompt("노래의 가수 이름을 입력해주세요.");
    updatePlaylist((playlists) => {
      playlists.lists.push({ title: title, artist: artist });
    });
  };
  const handledel = () => {
    const deltitle = prompt("삭제할 노래의 제목을 입력해주세요.");
    updatePlaylist((playlists) => {
      playlists.lists = playlists.lists.filter((l) => l.title !== deltitle);
    });
  };

  return (
    <div className={playlistclass}>
      <div className="leftdot"></div>
      <div className="rightdot"></div>
      <div className="b_leftdot"></div>
      <div className="b_rightdot"></div>
      <div className="playlistborder">
        <p className="playlist">PLAY LIST</p>
        <ul className="lists">
          {playlists.lists.map((list, index) => (
            <li key={index}>
              <p className="listtitle">💿{list.title}</p>
              <p
                className="listartist"
                style={
                  toRedMode || toBlueMode || toGreenMode
                    ? { color: "#ddd" }
                    : {}
                }
              >
                -{list.artist}-
              </p>
            </li>
          ))}
        </ul>
        <div className="btnwrap">
          <button className="listbtn" onClick={handleedit}>
            EDIT LIST
          </button>
          <button className="listbtn" onClick={handleadd}>
            ADD LIST
          </button>
          <button className="listbtn" onClick={handledel}>
            DELETE LIST
          </button>
        </div>
      </div>
    </div>
  );
}

const initialList = {
  artist: "artist",
  title: "title",
  lists: [
    {
      artist: "DAY6",
      title: "My Day",
    },
    {
      artist: "엔플라잉",
      title: "봄이 부시게(Spring Memories)",
    },
    {
      artist: "EXO",
      title: "Let Me In",
    },
    {
      artist: "NCT DERAM",
      title: "고래 Dive into You",
    },
  ],
};
