const currentEndpoint = (pathname) => {
  return {
    type: 'CURRENT_ENDPOINT',
    endpoint: pathname
  }
}

export default currentEndpoint;
