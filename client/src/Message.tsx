// Use PascalCasing 
function Message(){
  // The following is JSX (Javascript XML) syntax
  const name = 'Victor';
  if (name)
    return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>
}

export default Message;