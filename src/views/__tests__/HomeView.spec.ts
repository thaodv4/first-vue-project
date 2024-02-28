import { describe, it, expect, beforeEach} from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import HomeView from '../HomeView.vue'

describe('HomeView', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders properly', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Home Page')
  })
})
