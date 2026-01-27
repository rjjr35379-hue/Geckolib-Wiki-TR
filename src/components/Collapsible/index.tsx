import type {ReactNode} from "react";
import _collapsible from './_collapsible.mdx';

export default function Collapsible({children, title}): ReactNode {
  return (
      <_collapsible title={title} children={children}></_collapsible>
  )
}