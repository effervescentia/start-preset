import test from 'tape'

import * as preset from '../../lib'

test('tasks', (t) => {
  t.equal(
    typeof preset.lint,
    'function',
    'lint task'
  )

  t.equal(
    typeof preset.ci,
    'function',
    'ci task'
  )

  t.equal(
    typeof preset.prepush,
    'function',
    'prepush task'
  )

  t.end()
})
