import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { isVue2 } from '@opentiny/vue-common'
import { describe, expect, test, vi } from 'vitest'
import Numeric from '@opentiny/vue-numeric'

describe('Numeric Vue 2 events', () => {
  test.runIf(isVue2)('emits input when the user changes the input value', async () => {
    const input = vi.fn()
    const wrapper = mountPcMode(Numeric, {
      props: { modelValue: 1 },
      listeners: { input }
    } as any)

    await wrapper.find('input').setValue('2')

    expect(input).toHaveBeenCalledTimes(1)
    expect(input.mock.calls[0][0]).toMatchObject({ type: 'input' })
  })
})
