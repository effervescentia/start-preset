import env from 'start-env'
import files from 'start-files'
import read from 'start-read'
import standard from 'start-standard'
import codecov from 'start-codecov'
import { start, build, coverage, dev, test, tdd } from 'start-start-preset'

export { start, build, coverage, dev, test, tdd }

export const lint = (style) => start(
  env('NODE_ENV', 'test'),
  files([ 'lib/**/*.js', 'test/**/*.js' ]),
  standard(style || 'standard')
)

export const ci = () => start(
  lint,
  coverage,
  files('coverage/lcov.info'),
  read(),
  codecov()
)

export const prepush = () => start(
  lint,
  coverage
)
