import { ComponentStory, ComponentMeta } from '@storybook/react'

import WeatherCard from './WeatherCard'

import { mockWeatherResponse } from '../../../../testUtils'

export default {
  title: 'Example/Weather Card',
  component: WeatherCard
} as ComponentMeta<typeof WeatherCard>

const Template: ComponentStory<typeof WeatherCard> = args => (
  <WeatherCard {...args} />
)

export const SimpleWeatherData = Template.bind({})
SimpleWeatherData.args = {
  weatherData: mockWeatherResponse
}
