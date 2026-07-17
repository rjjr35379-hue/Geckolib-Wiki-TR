import type {ReactNode} from "react";
import Translate, {translate} from '@docusaurus/Translate';
import Admonition from '@theme/Admonition';

export default function AdditiveCodeHeader(): ReactNode {
  return (
      <div>
        <Admonition
          type="tip"
          icon="💻"
          title={translate({
            id: 'additiveCodeHeader.title',
            message: 'Additive Code Section',
          })}
        >
          <Translate id="additiveCodeHeader.line1">
            All code snippets in this section add onto the previous code snippets, using a step-by-step approach to build the complete code.
          </Translate>
          <br/>
          <Translate id="additiveCodeHeader.line2">
            Green highlights show added or modified lines of code for each step.
          </Translate>
        </Admonition>
      </div>
  )
}