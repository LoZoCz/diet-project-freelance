import { FC } from 'react'
import { H2 } from '../typography'

const ResultSection: FC = () => {
    return (
        <div className="w-1/3">
            <div>
                <H2 className="text-2xl font-bold text-green-800">
                    Your Results
                </H2>
            </div>
            <div>
                {result !== null ? (
                    <div className="text-center">
                        <p className="mb-4 text-lg">
                            Your Daily Caloric Needs:
                        </p>
                        <div className="relative inline-block">
                            <div className="absolute inset-0 scale-110 transform animate-pulse rounded-full bg-green-200"></div>
                            <p className="relative mb-4 text-5xl font-bold text-green-800">
                                {result}
                            </p>
                        </div>
                        <p className="mb-6 text-sm text-gray-600">
                            calories per day
                        </p>
                        <div className="rounded-lg bg-green-100 p-4 text-left">
                            <p className="mb-2 text-sm text-green-800">
                                <strong>Goal:</strong>{' '}
                                {weightGoal === 'lose'
                                    ? 'Weight Loss'
                                    : weightGoal === 'gain'
                                      ? 'Weight Gain'
                                      : 'Weight Maintenance'}
                            </p>
                            <p className="text-xs text-gray-600">
                                This calorie goal is tailored to your selected
                                weight management objective. Adjust your diet
                                and exercise routine accordingly for optimal
                                results.
                            </p>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-600">
                        Fill in your details and click &quot;Calculate&quot; to
                        see your results.
                    </p>
                )}
            </div>
        </div>
    )
}

export default ResultSection
