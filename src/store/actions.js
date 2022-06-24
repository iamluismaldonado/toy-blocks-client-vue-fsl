export const actions = {
  async getAllNodes({ commit }, nodeList) {
    for (const el of nodeList) {
      await commit('checkNodeStatusStart', el);

      try {
        const res = await fetch(`${el.url}/api/v1/status`);
        const response = await res.json();
        const params = {
          el,
          name: response.node_name
        };
        await commit('checkNodeStatusSuccess', params);

        try {
          const res = await fetch(`${el.url}/api/v1/blocks`);
          const response = await res.json();
          const params = {
            el,
            blockList: response.data
          };
          await commit('checkNodeBlockSuccess', params);
        }
        catch (e) {
          await commit('checkNodeBlockFailure', el);
        }
      }
      catch (e) {
        await commit('checkNodeStatusFailure', el);
      }
    }
  },
}