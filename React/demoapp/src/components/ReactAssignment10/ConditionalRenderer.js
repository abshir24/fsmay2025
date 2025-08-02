function ConditionalRenderer() {
  let isVisible = true

  return (
      <h1>{ isVisible === true ? "Component is visible": "Component is not visible" }</h1>
  );
}

export default ConditionalRenderer;