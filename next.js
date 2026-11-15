import { globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

import { typescriptRules } from './typescript-rules.js'

const ignores = globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts'], 'nyg/next-ignores')

export const next = [ignores, ...nextVitals]

export const nextWithTypescript = [...next, ...nextTypescript, typescriptRules]

export default { next, nextWithTypescript }
