'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { H1, H2, Large, P } from '@/components/custom/typography'

type ActivityLevelTypes =
    | 'sedentary'
    | 'light'
    | 'moderate'
    | 'active'
    | 'veryActive'

const activityLevels = [
    {
        label: 'Sedentary',
        value: 'sedentary',
    },
    {
        label: 'Light',
        value: 'light',
    },
    {
        label: 'Moderate',
        value: 'moderate',
    },
    {
        label: 'Active',
        value: 'active',
    },
    {
        label: 'Very Active',
        value: 'veryActive',
    },
]

export default function Calculator() {
    const [gender, setGender] = useState('female')
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [activityLevel, setActivityLevel] =
        useState<ActivityLevelTypes>('moderate')
    const [result, setResult] = useState<string>('????')
    const [weightGoal, setWeightGoal] = useState('maintain')
    const [error, setError] = useState(false)

    const goalSwitch =
        weightGoal === 'lose'
            ? 'Weight Loss'
            : weightGoal === 'gain'
              ? 'Weight Gain'
              : 'Weight Maintenance'

    const toggleSelect = (value: string) => {
        setActivityLevel(value as ActivityLevelTypes)
    }

    const calculateCalories = () => {
        setError(false)
        const ageNum = parseInt(age, 10)
        const weightNum = parseInt(weight, 10)
        const heightNum = parseInt(height, 10)

        let bmr

        if (gender === 'male') {
            bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5
        } else {
            bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161
        }

        const activityMultipliers = {
            sedentary: 1.2,
            light: 1.375,
            moderate: 1.55,
            active: 1.725,
            veryActive: 1.9,
        }

        let calories = Math.round(bmr * activityMultipliers[activityLevel])

        switch (weightGoal) {
            case 'lose':
                calories -= 500
                break
            case 'gain':
                calories += 500
                break
            default:
            // maintain weight, no change
        }

        if (!Number.isNaN(calories)) {
            return setResult(calories.toString())
        }

        return setError(!calories)
    }

    const changeGoal = (value: string) => {
        setWeightGoal(value)
        setResult('????')
    }

    return (
        <main className="min-h-section p-8">
            <div className="mx-auto flex max-w-main flex-col gap-8 pt-0 tablet:flex-row tablet:pt-24">
                <div className="w-full tablet:w-2/3">
                    <div className="mb-4">
                        <H1 className="text-3xl font-bold text-primary">
                            Caloric Calculator
                        </H1>
                    </div>
                    <div>
                        <div className="space-y-6">
                            <div>
                                <Label htmlFor="gender" className="mb-2 block">
                                    Gender
                                </Label>
                                <RadioGroup
                                    id="gender"
                                    value={gender}
                                    onValueChange={setGender}
                                    className="flex space-x-4"
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            value="male"
                                            id="male"
                                        />
                                        <Label htmlFor="male">Male</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            value="female"
                                            id="female"
                                        />
                                        <Label htmlFor="female">Female</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <Label htmlFor="age" className="mb-2 block">
                                        Age
                                    </Label>
                                    <Input
                                        id="age"
                                        type="text"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        placeholder="Enter your age"
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="height"
                                        className="mb-2 block"
                                    >
                                        Height (cm)
                                    </Label>
                                    <Input
                                        id="height"
                                        type="text"
                                        value={height}
                                        onChange={(e) =>
                                            setHeight(e.target.value)
                                        }
                                        placeholder="Enter your height"
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="weight"
                                        className="mb-2 block"
                                    >
                                        Weight (kg)
                                    </Label>
                                    <Input
                                        id="weight"
                                        type="text"
                                        value={weight}
                                        onChange={(e) =>
                                            setWeight(e.target.value)
                                        }
                                        placeholder="Enter your weight"
                                    />
                                </div>
                            </div>
                            <div>
                                <Label
                                    htmlFor="activity"
                                    className="mb-2 block"
                                >
                                    Activity Level
                                </Label>
                                <Select
                                    value={activityLevel}
                                    onValueChange={toggleSelect}
                                >
                                    <SelectTrigger id="activity">
                                        <SelectValue placeholder="Select activity level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {activityLevels.map((level, id) => (
                                            <SelectItem
                                                key={id}
                                                value={level.value}
                                            >
                                                {level.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label
                                    htmlFor="weight-goal"
                                    className="mb-2 block"
                                >
                                    Weight Goal
                                </Label>
                                <Tabs
                                    value={weightGoal}
                                    onValueChange={changeGoal}
                                >
                                    <TabsList className="grid w-full grid-cols-3">
                                        <TabsTrigger value="lose">
                                            Lose
                                        </TabsTrigger>
                                        <TabsTrigger value="maintain">
                                            Maintain
                                        </TabsTrigger>
                                        <TabsTrigger value="gain">
                                            Gain
                                        </TabsTrigger>
                                    </TabsList>
                                </Tabs>
                            </div>
                            <Button
                                onClick={calculateCalories}
                                className="w-full"
                            >
                                Calculate
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="mb-8 w-full tablet:w-1/3">
                    <div>
                        <H2 className="text-2xl font-bold text-primary">
                            Your Results
                        </H2>
                    </div>
                    <div className="mt-2">
                        <div className="text-center">
                            <P className="mb-4 text-lg">
                                Your Daily Caloric Needs:
                            </P>
                            <div className="relative inline-block">
                                <div className="absolute inset-0 scale-110 transform animate-pulse rounded-full bg-emerald-200"></div>
                                <P className="relative p-1 text-5xl font-bold text-primary">
                                    {result}
                                </P>
                            </div>
                            <P className="mb-6 mt-2 text-sm text-gray-600">
                                calories per day
                            </P>
                            <div className="rounded-lg bg-emerald-100 p-4 text-left">
                                <P className="text-md mb-2 text-primary">
                                    <Large>Goal:</Large>{' '}
                                    {result === '????' ? '????' : goalSwitch}
                                </P>
                                <P className="text-xs text-gray-600">
                                    This calorie goal is tailored to your
                                    selected weight management objective. Adjust
                                    your diet and exercise routine accordingly
                                    for optimal results.
                                </P>
                            </div>
                            {error && (
                                <P className="m-2 text-center text-gray-600">
                                    Fill in your details and click
                                    &quot;Calculate&quot; to see your results.
                                </P>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
