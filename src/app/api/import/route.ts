import { NextRequest, NextResponse } from "next/server";
import { parseVocabularyCsv } from "@/lib/import-parser";
import { getImportedRows, saveImportedRows } from "@/lib/content-store";

export async function GET() {
  return NextResponse.json({
    rows: getImportedRows()
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { csvText?: string; mode?: "append" | "replace" };

    if (!body.csvText) {
      return NextResponse.json(
        { error: "缺少 csvText。" },
        { status: 400 }
      );
    }

    const parsedRows = parseVocabularyCsv(body.csvText);
    const existingRows = body.mode === "replace" ? [] : getImportedRows();
    const mergedRows = [...existingRows, ...parsedRows];
    saveImportedRows(mergedRows);

    return NextResponse.json({
      imported: parsedRows.length,
      total: mergedRows.length
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "导入失败。"
      },
      { status: 400 }
    );
  }
}
