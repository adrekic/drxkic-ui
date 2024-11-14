import React from "react"
import type { Meta } from "@storybook/react"
import { Popover } from "../Popover"
import { Button } from "../Button"

const meta: Meta = {
	title: "Components/Popover",
}

export default meta

export const Basic = () => {
	return (
		<div className="flex flex-grow gap-6">
			<Popover.Root>
				<Popover.Trigger>
					<Button color="overmap">trigger</Button>
				</Popover.Trigger>
				<Popover.Content color="overmap" align="start">
					<div style={{ width: "100px", height: "30px" }}></div>
				</Popover.Content>
			</Popover.Root>
		</div>
	)
}
