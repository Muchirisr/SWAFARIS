// data/questions/questions.ts
// The onboarding question bank that drives Screen 2 (AI Onboarding).
// One question per screen, in this exact order, per SPS.

import type { OnboardingQuestion } from "@/types/stm";

export const onboardingQuestions: OnboardingQuestion[] = [
  {
    id: "travelIntention",
    prompt: "Why are you taking this journey?",
    type: "select",
    options: [
      { label: "Discovery", value: "Discovery" },
      { label: "Adventure", value: "Adventure" },
      { label: "Connection", value: "Connection" },
      { label: "Recovery", value: "Recovery" },
      { label: "Celebration", value: "Celebration" },
      { label: "Learning", value: "Learning" },
      { label: "Transformation", value: "Transformation" },
    ],
  },
  {
    id: "transformationGoal",
    prompt: "What would make this journey meaningful for you?",
    type: "select",
    options: [
      { label: "Feel refreshed", value: "Feel refreshed" },
      { label: "Reconnect with someone", value: "Reconnect with someone" },
      { label: "Create memories", value: "Create memories" },
      { label: "Rediscover yourself", value: "Rediscover yourself" },
      { label: "Gain perspective", value: "Gain perspective" },
      { label: "Celebrate a milestone", value: "Celebrate a milestone" },
      { label: "Experience something unforgettable", value: "Experience something unforgettable" },
    ],
  },
  {
    id: "recoveryState",
    prompt: "What emotional state are you bringing into this journey?",
    type: "select",
    options: [
      { label: "Energized", value: "Energized" },
      { label: "Curious", value: "Curious" },
      { label: "Inspired", value: "Inspired" },
      { label: "Burned out", value: "Burned out" },
      { label: "Overwhelmed", value: "Overwhelmed" },
      { label: "Seeking clarity", value: "Seeking clarity" },
      { label: "Need to disconnect", value: "Need to disconnect" },
    ],
  },
  {
    id: "desiredEnergyLevel",
    prompt: "What pace of activity feels right, day to day?",
    type: "select",
    options: [
      { label: "Restorative", value: "Restorative" },
      { label: "Balanced", value: "Balanced" },
      { label: "High Energy", value: "High Energy" },
    ],
  },
  {
    id: "journeyPace",
    prompt: "How should your journey move?",
    type: "select",
    options: [
      { label: "Slow Immersion", value: "Slow Immersion" },
      { label: "Balanced Exploration", value: "Balanced Exploration" },
      { label: "Fast Expedition", value: "Fast Expedition" },
    ],
  },
  {
    id: "natureConnection",
    prompt: "What's your relationship with Kenya's landscapes and wildlife?",
    type: "select",
    options: [
      { label: "Scenic Appreciation", value: "Scenic Appreciation" },
      { label: "Wildlife Interest", value: "Wildlife Interest" },
      { label: "Nature Immersion", value: "Nature Immersion" },
      { label: "Conservation Connection", value: "Conservation Connection" },
    ],
  },
  {
    id: "comfortPhilosophy",
    prompt: "What does premium travel mean to you?",
    type: "select",
    options: [
      { label: "Comfort Luxury", value: "Comfort Luxury" },
      { label: "Authentic Luxury", value: "Authentic Luxury" },
      { label: "Adventure Luxury", value: "Adventure Luxury" },
      { label: "Quiet Luxury", value: "Quiet Luxury" },
      { label: "Exclusive Luxury", value: "Exclusive Luxury" },
    ],
  },
  {
    id: "socialPreference",
    prompt: "What kind of social environment are you seeking?",
    type: "select",
    options: [
      { label: "Private Escape", value: "Private Escape" },
      { label: "Balanced Connection", value: "Balanced Connection" },
      { label: "Social Exploration", value: "Social Exploration" },
    ],
  },
  {
    id: "authenticityAppetite",
    prompt: "How far beyond typical tourism do you want to go?",
    type: "select",
    options: [
      { label: "Classic Experience", value: "Classic Experience" },
      { label: "Curious Explorer", value: "Curious Explorer" },
      { label: "Hidden Gem Seeker", value: "Hidden Gem Seeker" },
      { label: "Deep Cultural Immersion", value: "Deep Cultural Immersion" },
    ],
  },
  {
    id: "budgetTier",
    prompt: "What level of accommodation feels right for this journey?",
    type: "select",
    options: [
      { label: "Value", value: "Value" },
      { label: "Mid-range", value: "Mid-range" },
      { label: "Premium", value: "Premium" },
      { label: "Luxury", value: "Luxury" },
      { label: "Ultra Luxury", value: "Ultra Luxury" },
    ],
  },
  {
    id: "tripDuration",
    prompt: "How long would you like your journey to be?",
    type: "select",
    options: [
      { label: "3-5 Days", value: "3-5 Days" },
      { label: "6-8 Days", value: "6-8 Days" },
      { label: "9-12 Days", value: "9-12 Days" },
      { label: "13+ Days", value: "13+ Days" },
    ],
  },
  {
    id: "hiddenIntent",
    prompt: "Anything else you'd like us to know about your journey?",
    type: "freeText",
    optional: true,
  },
];