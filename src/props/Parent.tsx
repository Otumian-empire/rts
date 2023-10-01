import { Child, ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <>
      <Child
        name={"Daniel Cormier"}
        age={40}
        onClickEvent={() => console.log("Hello there!!")}
      />

      {/* <Child name={"Susan"} age={32}>
        I like blue birds
      </Child> */}
      {/* 
        Type '{ children: string; name: string; age: number; }' is not assignable 
        to type 'IntrinsicAttributes & ChildProp'. Property 'children' does not 
        exist on type 'IntrinsicAttributes & ChildProp'.ts(2322) (alias) const 
        Child: (props: ChildProp) => JSX.Element import Child
      */}
      {/* whats a simple approach would be to define the children props */}
      {/* but us FC is simple */}
      {/* <ChildAsFC
        name={"Muhammad Ali"}
        age={65}
        onClickEvent={() => console.log("Muhammad Ali")}
      >
        <>{"hello"}</>
      </ChildAsFC> */}
    </>
  );
};

export default Parent;
