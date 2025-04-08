export const parseChartData = (responseText: string): unknown => {
	try {
		const jsonMatch = responseText.match(/```json([\s\S]*?)```/);
		if (!jsonMatch) return null;
		return JSON.parse(jsonMatch[1].trim());
	} catch {
		return null;
	}
};
