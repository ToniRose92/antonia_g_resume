import {memo} from 'react';

export type ClarityMotifVariant = 'default' | 'bold' | 'subtle' | 'dotted' | 'inverted';

type Props = {className?: string; variant?: ClarityMotifVariant};

/** Decorative vector motif. All colors inherit the portfolio's brand tokens. */
const ClarityMotif = memo(({className = '', variant = 'default'}: Props) => (
  <svg
    aria-hidden="true"
    className={['clarity-motif', 'clarity-motif--' + variant, className].filter(Boolean).join(' ')}
    focusable="false"
    viewBox="0 0 600 600"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none">
      <circle className="clarity-motif__ring clarity-motif__ring--sage" cx="267" cy="235" r="195" strokeWidth="2.5"/>
      <circle className="clarity-motif__ring clarity-motif__ring--ivory" cx="405" cy="250" r="169" strokeWidth="2"/>
      <circle className="clarity-motif__ring clarity-motif__ring--aubergine" cx="233" cy="355" r="190" strokeWidth="3"/>
      <circle className="clarity-motif__ring clarity-motif__ring--ivory" cx="339" cy="377" r="183" strokeWidth="3.5"/>
      <circle className="clarity-motif__ring clarity-motif__ring--muted clarity-motif__ring--dotted" cx="423" cy="165" r="148" strokeDasharray="1 12" strokeLinecap="round" strokeWidth="3"/>
      <circle className="clarity-motif__ring clarity-motif__ring--sage clarity-motif__ring--dotted" cx="170" cy="443" r="116" strokeDasharray="1 12" strokeLinecap="round" strokeWidth="3"/>
    </g>
    <circle className="clarity-motif__center" cx="340" cy="330" r="67"/>
  </svg>
));

ClarityMotif.displayName = 'ClarityMotif';

export default ClarityMotif;
