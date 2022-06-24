export const mutations = {
  checkNodeStatusStart(state, { url }) {
    let list = state.nodes.list;
    const index = state.nodes.list.findIndex(t => t.url === url);
    if (index >= 0) {
      list = [
        ...state.nodes.list.slice(0, index),
        {
          ...state.nodes.list[index],
          loading: true
        },
        ...state.nodes.list.slice(index + 1)
      ];
    }
    state.nodes = {
      list: [
        ...list,
      ]
    }
  },
  checkNodeStatusSuccess(state, { el: { url }, name }) {
    let list = state.nodes.list;
    const index = state.nodes.list.findIndex(t => t.url === url);
    if (index >= 0) {
      list = [
        ...state.nodes.list.slice(0, index),
        {
          ...state.nodes.list[index],
          name: name,
          online: true,
          loading: false
        },
        ...state.nodes.list.slice(index + 1)
      ];
    }

    state.nodes = {
      list: [
        ...list,
      ]
    }
  },
  checkNodeBlockSuccess(state, { el: { url }, blockList }) {
    let list = state.nodes.list;
    const index = state.nodes.list.findIndex(t => t.url === url);
    if (index >= 0) {
      const blocks = state.nodes.list[index].blocks;
      for (let i = 0; i < blockList.length; i++) {
        blocks.push({ id: blockList[i].id, name: blockList[i].attributes.data });
      }
      list = [
        ...state.nodes.list.slice(0, index),
        {
          ...state.nodes.list[index],
          blocks: blocks
        },
        ...state.nodes.list.slice(index + 1)
      ];
    }

    state.nodes = {
      list: [
        ...list,
      ]
    }
  },
  checkNodeStatusFailure(state, { url }) {
    let list = state.nodes.list;
    const index = state.nodes.list.findIndex(t => t.url === url);
    if (index >= 0) {
      list = [
        ...state.nodes.list.slice(0, index),
        {
          ...state.nodes.list[index],
          online: false,
          loading: false
        },
        ...state.nodes.list.slice(index + 1)
      ];
    }

    state.nodes = {
      list: [
        ...list,
      ]
    }
  },
  checkNodeBlockFailure(state, { url }) {
    let list = state.nodes.list;
    const index = state.nodes.list.findIndex(t => t.url === url);
    if (index >= 0) {
      list = [
        ...state.nodes.list.slice(0, index),
        {
          ...state.nodes.list[index],
          online: false,
          loading: false,
          blocks: []
        },
        ...state.nodes.list.slice(index + 1)
      ];
    }

    state.nodes = {
      list: [
        ...list,
      ]
    }
  },
}