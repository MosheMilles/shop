import React from 'react'
const DocsContext = React.createContext({});
export const DocsProvider = DocsContext.Provider;
export const DocsConsumer = DocsContext.Consumer;
export default DocsContext;
