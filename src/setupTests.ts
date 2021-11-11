import '@testing-library/jest-dom'
import { setupServer } from 'msw/node'
import { handlers } from './testUtils'

export const server = setupServer(...handlers)

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
