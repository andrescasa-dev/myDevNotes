# Render Props
its a better way to composing components.

# Reusable state an logic
In the parent component we stablish all the logic and using children (or props.render) we give the responsibility to the children of how it will render the the data, something like

Parent component (state) => child Component

for example we can implement a Toggler component that let the child to use the "on" state variable, and the "toggle" function to update the state. 

Toggler ({on: state.on, toggle: state.toggle})=> child 

> so child can use "on" and "toggle"

```js
class Toggle extends React.Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState(state => ({ on: !state.on }));
  };

  render() {
    return (
      <div>
        {this.props.children({
          on: this.state.on,
          toggle: this.toggle
        })}
      </div>
    );
  }
}

// Use the Toggle component with a render prop as a child
<Toggle>
  {({ on, toggle }) => (
    <button onClick={toggle}>{on ? 'ON' : 'OFF'}</button>
  )}
</Toggle>

```

# Summarize
To summarize, render props is a design pattern in React where a component's prop contains a function that is used to render the component. This allows for components to be more reusable and flexible by allowing the child component to decide how it wants to be rendered, rather than the parent component dictating it.