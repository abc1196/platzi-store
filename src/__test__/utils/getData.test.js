import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Test API Call', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '123' }));

    const response = await getData('https://google.com');
    expect(response.data).toEqual('123');

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
