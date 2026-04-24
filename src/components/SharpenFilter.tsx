/**
 * Global SVG filters:
 *  - #sharpen  — mild unsharp mask for low-res headshots
 *  - #duotone  — purple/cream duotone that unifies all photography into the brand palette
 */
export function SharpenFilter() {
  return (
    <svg
      aria-hidden
      focusable="false"
      width="0"
      height="0"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        <filter id="sharpen" x="0" y="0" width="100%" height="100%">
          <feConvolveMatrix
            order="3"
            preserveAlpha="true"
            kernelMatrix="
              0    -0.35  0
              -0.35  2.4  -0.35
              0    -0.35  0
            "
          />
        </filter>

        {/* Stronger, two-stage unsharp mask — used for low-res officer headshots.
            First pass pulls detail from blur, second pass re-sharpens the result
            so 250×250 JPEGs read as editorial portraits instead of thumbnails. */}
        <filter id="sharpen-strong" x="0" y="0" width="100%" height="100%">
          <feGaussianBlur stdDeviation="0.6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="arithmetic"
            k1="0" k2="1.9" k3="-0.9" k4="0" result="usm" />
          <feConvolveMatrix
            in="usm"
            order="3"
            preserveAlpha="true"
            kernelMatrix="
              -0.12  -0.22  -0.12
              -0.22   2.5   -0.22
              -0.12  -0.22  -0.12
            "
          />
        </filter>

        {/* Duotone: map luminance to a 2-stop gradient (deep plum → warm cream).
            Luminance is computed via feColorMatrix, then remapped through feComponentTransfer. */}
        <filter id="duotone" x="0" y="0" width="100%" height="100%">
          <feColorMatrix
            type="matrix"
            values="
              0.33 0.34 0.33 0 0
              0.33 0.34 0.33 0 0
              0.33 0.34 0.33 0 0
              0    0    0    1 0
            "
            result="gray"
          />
          <feComponentTransfer in="gray" result="duo">
            {/* Dark: #1a1028 (deep plum) → Highlight: #f0d9a0 (cream/warm)
                R: 0.10 → 0.94
                G: 0.06 → 0.85
                B: 0.16 → 0.63 */}
            <feFuncR type="table" tableValues="0.10 0.94" />
            <feFuncG type="table" tableValues="0.06 0.85" />
            <feFuncB type="table" tableValues="0.16 0.63" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}
