import { CurriculumWeek } from "@/lib/types";

export function getCurriculumDisplayName(curriculum: string) {
  switch (curriculum) {
    case "scholastic-g5":
      return "Scholastic 五年级词汇书";
    case "wonders":
      return "Wonders";
    default:
      return "导入词库";
  }
}

export function getStudySetHref(week: CurriculumWeek) {
  return `/curriculum/${week.grade}/unit/${week.unit}/week/${week.week}`;
}

export function getStudySetBadge(week: CurriculumWeek) {
  if (week.curriculum === "scholastic-g5") {
    return `${getCurriculumDisplayName(week.curriculum)} · 第 ${week.week} 单元`;
  }

  return `${getCurriculumDisplayName(week.curriculum)} ${week.grade} 年级`;
}

export function getStudySetLabel(week: CurriculumWeek) {
  if (week.curriculum === "scholastic-g5") {
    return `第 ${week.week} 单元`;
  }

  return `第 ${week.week} 周`;
}

export function getStudySetDescription(week: CurriculumWeek) {
  if (week.curriculum === "scholastic-g5") {
    return `当前练习来自 ${getCurriculumDisplayName(week.curriculum)} 的第 ${week.week} 单元，共 10 个词。`;
  }

  return `当前练习来自 ${week.grade} 年级第 ${week.unit} 单元第 ${week.week} 周。`;
}
