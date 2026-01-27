import type {ReactNode} from "react";

import Admonition from '@theme/Admonition';

export default function AdditiveCodeHeader(): ReactNode {
  return (
      <div>
        <Admonition type="tip" icon="💻" title="Additive Code Section">
            All code snippets in this section add onto the previous code snippets, using a step-by-step approach to build the complete code.<br/>
            Green highlights show added or modified lines of code for each step.
        </Admonition>
      </div>
  )
}