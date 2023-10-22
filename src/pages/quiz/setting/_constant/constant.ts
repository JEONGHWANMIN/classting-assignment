import { LabeledValue } from "antd/es/select";

export const INITIAL_QUIZ_SETTING = {
  amount: 5,
  difficulty: "",
  category: "",
};

export type QuizSetting = typeof INITIAL_QUIZ_SETTING;

export const QUIZ_COUNT_OPTIONS: LabeledValue[] = [
  {
    key: "1",
    value: 5,
    label: "5개",
  },
  {
    key: "2",
    value: 10,
    label: "10개",
  },
  {
    key: "3",
    value: 15,
    label: "15개",
  },
  {
    key: "4",
    value: 20,
    label: "20개",
  },
];

export const QUIZ_DIFFICULTY_OPTIONS: LabeledValue[] = [
  {
    key: "1",
    value: "",
    label: "전체",
  },
  {
    key: "2",
    value: "easy",
    label: "쉬움",
  },
  {
    key: "3",
    value: "medium",
    label: "보통",
  },
  {
    key: "4",
    value: "hard",
    label: "어려움",
  },
];

export const QUIZ_CATEGORY_OPTIONS: LabeledValue[] = [
  {
    key: "1",
    value: "",
    label: "전체",
  },
  {
    key: "9",
    value: 9,
    label: "일반 상식",
  },
  {
    key: "10",
    value: 10,
    label: "도서",
  },
  {
    key: "11",
    value: 11,
    label: "영화",
  },
  {
    key: "12",
    value: 12,
    label: "음악",
  },
  {
    key: "13",
    value: 13,
    label: "뮤지컬, 극장",
  },
  {
    key: "14",
    value: 14,
    label: "티비",
  },
  {
    key: "15",
    value: 15,
    label: "비디오 게임",
  },
  {
    key: "16",
    value: 16,
    label: "보드 게임",
  },
  {
    key: "17",
    value: 17,
    label: "과학: 자연",
  },
  {
    key: "18",
    value: 18,
    label: "과학: 컴퓨터",
  },
  {
    key: "19",
    value: 19,
    label: "과학: 수학",
  },
  {
    key: "20",
    value: 20,
    label: "신화",
  },
  {
    key: "21",
    value: 21,
    label: "스포츠",
  },
  {
    key: "22",
    value: 22,
    label: "지리",
  },
  {
    key: "23",
    value: 23,
    label: "역사",
  },
  {
    key: "24",
    value: 24,
    label: "정치",
  },
  {
    key: "25",
    value: 25,
    label: "예술",
  },
  {
    key: "26",
    value: 26,
    label: "유명인",
  },
  {
    key: "27",
    value: 27,
    label: "동물",
  },
  {
    key: "28",
    value: 28,
    label: "차량",
  },
  {
    key: "29",
    value: 29,
    label: "코믹",
  },
  {
    key: "30",
    value: 30,
    label: "과학: 가젯",
  },
  {
    key: "31",
    value: 31,
    label: "일본 애니메이션 & 만화",
  },
  {
    key: "32",
    value: 32,
    label: "카툰 & 애니매이션스",
  },
];
