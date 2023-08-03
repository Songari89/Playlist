import React from "react";

export default function playlistReducer(playlist, action) {
  switch (action.type) {
    case "edit": {
      const { prevtitle, edittitle, editartist } = action;
      return {
        ...playlist,
        lists: playlist.lists.map((list) => {
          return list.title === prevtitle
            ? { ...list, title: edittitle, artist: editartist }
            : list;
        }),
      };
    }
    case "add": {
      const { title, artist } = action;
      return {
        ...playlist,
        lists: [...playlist.lists, { title, artist }],
      };
    }
    case "delete": {
      const { deltitle } = action;
      return {
        ...playlist,
        lists: playlist.lists.filter((list) => list.title !== deltitle),
      };
    }
    default: {
      throw Error(`알수없는 액션 타입이다.${action.type}`);
    }
  }
}
