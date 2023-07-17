import React from "react";

export default function Example({ block: { Blocks, childBlocks } }) {
  return (
    <div className="container mx-auto sm:px-6 lg:px-8">
      <Blocks blocks={childBlocks} />
    </div>
  );
}
