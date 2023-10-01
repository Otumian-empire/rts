interface ChildProp {
  name: string;
  age: number;
  onClickEvent: () => void;
}

export const Child = (props: ChildProp) => {
  return (
    <div>
      Hello there, I am {props.name} and I am {props.age} years old!!!
      <button onClick={props.onClickEvent}>Click me</button>
    </div>
  );
};

// export const ChildAsFC: React.FunctionComponent<ChildProp> = (props: ChildProp) => {
export const ChildAsFC: React.FC<ChildProp> = ({
  name,
  age,
  onClickEvent,
  // children,
}) => {
  return (
    <div>
      Hello there, I am {name} and I am {age} years old!!!
      <button onClick={onClickEvent}>Click me</button>
      {/* we can simply add children */}
      {/* {children} */}
    </div>
  );
};

// TS see ChildAsFC as an actual tsx so we can have access to the properties
// propType, displayName, contextType, etc
// Also, with the FC annotation approach, we don't have to specify that there is a children
// props since it is done for
