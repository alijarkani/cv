export interface SkillItem {
    key: String
    rate: Number
    url?: String
}

export interface SkillGroupItem {
    title: String
    icon?: String
    items: Array<SkillItem>
}
