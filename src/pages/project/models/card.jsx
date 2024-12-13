import { CubeTransparentIcon } from '@heroicons/react/24/outline'
import { CubeIcon } from '@heroicons/react/24/outline'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { PATHS } from 'src/constants/paths'
dayjs.extend(relativeTime)

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function ModelCard({ model }) {
	return (
		<>
			<div
				key={model._id}
				className={classNames(
					'relative group p-6 bg-grey-100 hover:bg-gradient-to-r from-emerald-50 to-emerald-100 hover:ring-2 hover:ring-emerald-200 shadow-md transition duration-300 rounded-lg shadow '
				)}
			>
				<div>
					<span
						className={classNames(
							'text-emerald-800',
							'bg-[#F7F8F8]',
							'rounded-lg inline-flex p-3 ring-4 ring-white',
							'transition duration-450',
							'group-hover:scale-110 group-hover:bg-emerald-100 ease-in-out'
						)}
					>
						<CubeIcon
							className="h-7 w-7"
							aria-hidden="true"
						/>
					</span>
				</div>
				<div className="mt-8">
					<div className="flex w-full justify-between items-center">
						<h3 className="text-lg font-medium">
							<a
								href={PATHS.PREDICT(
									model.project_id,
									model.runID
								)}
								className="focus:outline-none"
							>
								{/* Extend touch target to entire panel */}
								<span
									className="absolute inset-0"
									aria-hidden="true"
								/>
								{model?.name}
							</a>
						</h3>
						{model.createdAt && (
							<span>{dayjs(model.createdAt).fromNow()}</span>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
