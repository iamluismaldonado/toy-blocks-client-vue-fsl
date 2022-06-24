import { mutations } from '../../src/store/mutations'
import initialState from '../../src/store/initialState';

describe('Store Mutations', () => {
  const {
    checkNodeStatusStart,
    checkNodeStatusSuccess,
    checkNodeBlockSuccess,
    checkNodeStatusFailure,
    checkNodeBlockFailure
  } = mutations;

  const initState = initialState();

  it('checkNodeStatusStart', () => {
    checkNodeStatusStart(initState, { url: initState.nodes.list[0].url });
    expect(initState.nodes.list[0].loading).toEqual(true);
  });

  it('checkNodeStatusSuccess', () => {
    const params = {
      el: {
        url: initState.nodes.list[0].url
      },
      name: 'Thawing Springs'
    };

    checkNodeStatusSuccess(initState, params);
    expect(initState.nodes.list[0].name).toEqual(params.name);
  });

  it('checkNodeStatusFailure', () => {
    checkNodeStatusFailure(initState, { url: initState.nodes.list[0].url });
    expect(initState.nodes.list[0].loading).toEqual(false);
    expect(initState.nodes.list[0].online).toEqual(false);
  });

  it('checkNodeBlockSuccess', () => {
    const params = {
      el: {
        url: initState.nodes.list[0].url
      },
      blockList: []
    };

    checkNodeBlockSuccess(initState, params);
    expect(initState.nodes.list[0].blocks).toEqual(params.blockList);
  });

  it('checkNodeBlockFailure', () => {
    checkNodeBlockFailure(initState, { url: initState.nodes.list[0].url });
    expect(initState.nodes.list[0].loading).toEqual(false);
    expect(initState.nodes.list[0].online).toEqual(false);
  });
});