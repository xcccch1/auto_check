<form string="员工" js_class="hr_employee_form" class="o_employee_form" create="false" delete="false" edit="false">
                    <field name="active" invisible="1" modifiers="{&quot;invisible&quot;: true}"/>
                    <field name="user_partner_id" invisible="1" can_create="true" can_write="true" modifiers="{&quot;invisible&quot;: true, &quot;readonly&quot;: true}"/>
                    <field name="hr_presence_state" invisible="1" on_change="1" modifiers="{&quot;invisible&quot;: true, &quot;readonly&quot;: true}"/>
                    <field name="image_128" invisible="1" on_change="1" modifiers="{&quot;invisible&quot;: true, &quot;readonly&quot;: true}"/>
                    <header>
                        <button name="129" string="启动计划" type="action" invisible="1" modifiers="{&quot;invisible&quot;: true}"/>
                    </header>
                    <sheet>
                        <div name="button_box" class="oe_button_box">
                            <button id="hr_presence_button" class="oe_stat_button" disabled="1" attrs="&#10;                    {'invisible': ['|', '|', '|', ('last_activity', '=', False), ('is_absent', '=', True), ('user_id', '=', False), ('id', '=', False)]}&#10;                " modifiers="{&quot;invisible&quot;: [&quot;|&quot;, &quot;|&quot;, &quot;|&quot;, [&quot;last_activity&quot;, &quot;=&quot;, false], [&quot;is_absent&quot;, &quot;=&quot;, true], [&quot;user_id&quot;, &quot;=&quot;, false], [&quot;id&quot;, &quot;=&quot;, false]]}">
                                <div role="img" class="fa fa-fw fa-circle text-success o_button_icon" attrs="{'invisible': [('hr_presence_state', '!=', 'present')]}" aria-label="可用" title="可用" modifiers="{&quot;invisible&quot;: [[&quot;hr_presence_state&quot;, &quot;!=&quot;, &quot;present&quot;]]}"/>
                                <div role="img" class="fa fa-fw fa-circle text-warning o_button_icon" attrs="{'invisible': [('hr_presence_state', '!=', 'to_define')]}" aria-label="离开" title="离开" modifiers="{&quot;invisible&quot;: [[&quot;hr_presence_state&quot;, &quot;!=&quot;, &quot;to_define&quot;]]}"/>
                                <div role="img" class="fa fa-fw fa-circle text-danger o_button_icon" attrs="{'invisible': [('hr_presence_state', '!=', 'absent')]}" aria-label="不可用" title="不可用" modifiers="{&quot;invisible&quot;: [[&quot;hr_presence_state&quot;, &quot;!=&quot;, &quot;absent&quot;]]}"/>

                                <div class="o_stat_info" attrs="{'invisible': [('hr_presence_state', '=', 'present')]}" modifiers="{&quot;invisible&quot;: [[&quot;hr_presence_state&quot;, &quot;=&quot;, &quot;present&quot;]]}">
                                    <span class="o_stat_text">
                                        未连接
                                    </span>
                                </div>
                                <div class="o_stat_info" attrs="{'invisible': [('hr_presence_state', '!=', 'present')]}" modifiers="{&quot;invisible&quot;: [[&quot;hr_presence_state&quot;, &quot;!=&quot;, &quot;present&quot;]]}">
                                    <span class="o_stat_value" attrs="{'invisible': [('last_activity_time', '=', False)]}" modifiers="{&quot;invisible&quot;: [[&quot;last_activity_time&quot;, &quot;=&quot;, false]]}">
                                        <field name="last_activity_time" modifiers="{&quot;readonly&quot;: true}"/>
                                    </span>
                                    <span class="o_stat_value" attrs="{'invisible': [('last_activity_time', '!=', False)]}" modifiers="{&quot;invisible&quot;: [[&quot;last_activity_time&quot;, &quot;!=&quot;, false]]}">
                                        <field name="last_activity" modifiers="{&quot;readonly&quot;: true}"/>
                                    </span>
                                    <span class="o_stat_text">连接以来</span>
                                </div>
                            </button>
                        
                <field name="show_leaves" invisible="1" modifiers="{&quot;invisible&quot;: true, &quot;readonly&quot;: true}"/>
                <field name="is_absent" invisible="1" modifiers="{&quot;invisible&quot;: true, &quot;readonly&quot;: true}"/>
                <field name="hr_icon_display" invisible="1" modifiers="{&quot;invisible&quot;: true, &quot;readonly&quot;: true}"/>
                <button name="action_time_off_dashboard" type="object" class="oe_stat_button" context="{'search_default_employee_id': id}" attrs="{'invisible': [('is_absent', '=', False)]}" modifiers="{&quot;invisible&quot;: [[&quot;is_absent&quot;, &quot;=&quot;, false]]}">
                        <div attrs="{'invisible': [('hr_icon_display', '!=', 'presence_holiday_present')]}" role="img" class="fa fa-fw fa-plane o_button_icon text-success" aria-label="直到" title="直到" modifiers="{&quot;invisible&quot;: [[&quot;hr_icon_display&quot;, &quot;!=&quot;, &quot;presence_holiday_present&quot;]]}"/>
                        <div attrs="{'invisible': [('hr_icon_display', '!=', 'presence_holiday_absent')]}" role="img" class="fa fa-fw fa-plane o_button_icon text-warning" aria-label="直到" title="直到" modifiers="{&quot;invisible&quot;: [[&quot;hr_icon_display&quot;, &quot;!=&quot;, &quot;presence_holiday_absent&quot;]]}"/>
                    <div class="o_field_widget o_stat_info">
                        <span class="o_stat_value">
                            <field name="leave_date_to" modifiers="{&quot;readonly&quot;: true}"/>
                        </span>
                        <span class="o_stat_text">
                           休假到
                        </span>
                    </div>
                </button>
                <button name="action_time_off_dashboard" type="object" class="oe_stat_button" icon="fa-calendar" attrs="{'invisible': [('show_leaves','=', False)]}" context="{'search_default_employee_id': id}" help="剩余的休假" modifiers="{&quot;invisible&quot;: [[&quot;show_leaves&quot;, &quot;=&quot;, false]]}">
                    <div class="o_field_widget o_stat_info">
                        <span class="o_stat_value">
                            <field name="allocation_used_display" modifiers="{&quot;readonly&quot;: true}"/>/<field name="allocation_display" modifiers="{&quot;readonly&quot;: true}"/> 天
                        </span>
                        <span class="o_stat_text">
                            到
                        </span>
                    </div>
                </button>
            </div>
                        <widget name="web_ribbon" title="已归档" bg_color="bg-danger" attrs="{'invisible': [('active', '=', True)]}" modifiers="{&quot;invisible&quot;: [[&quot;active&quot;, &quot;=&quot;, true]]}"/>
                        <field name="avatar_128" invisible="1" modifiers="{&quot;invisible&quot;: true, &quot;readonly&quot;: true}"/>
                        <field name="image_1920" widget="image" class="oe_avatar" options="{&quot;zoom&quot;: true, &quot;preview_image&quot;:&quot;avatar_128&quot;}" on_change="1" modifiers="{}"/>
                        <div class="oe_title">
                            <group>
                        <label for="last_name" string="中文姓名"/>
                        <div>
                            <field name="last_name" placeholder="姓" class="oe_inline" required="True" on_change="1" modifiers="{&quot;required&quot;: true}"/>
                            <field name="first_name" placeholder="名" class="oe_inline" required="True" on_change="1" modifiers="{&quot;required&quot;: true}"/>
                        </div>
                        <label for="en_first_name" string="英文姓名"/>
                        <div>
                            <span style="margin-right: 6px;"><field name="en_first_name" placeholder="名" class="oe_inline" on_change="1" modifiers="{}"/></span>
                            <span><field name="en_last_name" placeholder="姓" class="oe_inline" on_change="1" modifiers="{}"/></span>
                        </div>
                        <field name="job_title" placeholder="跟随主要工作岗位变动" modifiers="{}"/>
                    </group>
                </div>
                        <group>
                            <group>
                                
                    <field name="is_superior" invisible="1" modifiers="{&quot;invisible&quot;: true, &quot;readonly&quot;: true}"/>
                    <field name="employee_number" placeholder="N/A" modifiers="{}"/>
                    <field name="employee_type" placeholder="N/A" modifiers="{&quot;required&quot;: true}"/>
                    <field name="current_rank" placeholder="N/A" options="{'no_create': True, 'no_create_edit': True}" can_create="false" can_write="false" modifiers="{}"/>
                <label for="work_phone"/>
                    <div>
                        <field name="work_phone_area_code" placeholder="区号" class="oe_inline" modifiers="{}"/> -
                        <field name="work_phone" placeholder="号码" class="oe_inline" modifiers="{}"/> -
                        <field name="work_phone_short_num" placeholder="短号" class="oe_inline" modifiers="{}"/>
                    </div>
                    <label for="mobile_phone"/>
                    <div>
                        <field name="mobile_phone_area_code" placeholder="区号" class="oe_inline" modifiers="{}"/> -
                        <field name="mobile_phone" placeholder="号码" class="oe_inline" modifiers="{}"/>
                    </div>
                    <field name="work_area" placeholder="N/A" on_change="1" can_create="false" can_write="false" modifiers="{}"/>
                    <field name="contract_area" placeholder="N/A" can_create="false" can_write="false" modifiers="{}"/>
                    <field name="contract_subject" placeholder="N/A" modifiers="{}"/>
                    <field name="jurisdiction_work_area" placeholder="N/A" widget="many2many_tags" can_create="false" can_write="false" modifiers="{}"/>
                <field name="work_email" widget="email" invisible="1" modifiers="{&quot;invisible&quot;: true}"/>
                <field name="company_id" on_change="1" can_create="false" can_write="false" modifiers="{&quot;required&quot;: true}"/>
                <field name="company_country_id" invisible="1" on_change="1" can_create="true" can_write="true" modifiers="{&quot;invisible&quot;: true, &quot;readonly&quot;: true}"/>
                                <field name="company_country_code" invisible="1" modifiers="{&quot;invisible&quot;: true, &quot;readonly&quot;: true}"/>
                            </group>
                            <group>
                                <field name="department_id" placeholder="N/A" on_change="1" can_create="false" can_write="false" modifiers="{}"/>
                <field name="immediate_superior_id" placeholder="N/A" can_create="false" can_write="false" modifiers="{}"/>
                    <field name="department_deputy_id" placeholder="N/A" can_create="false" can_write="false" modifiers="{}"/>
                    <field name="regional_director_id" placeholder="N/A" can_create="false" can_write="false" modifiers="{}"/>
                    <field name="department_highest_level_id" placeholder="N/A" can_create="false" can_write="false" modifiers="{}"/>
                    <field name="job_id" placeholder="N/A" on_change="1" can_create="true" can_write="true" modifiers="{}"/>
                
                                <field name="parent_id" placeholder="N/A" can_create="false" can_write="false" modifiers="{}"/>
                <field name="team" placeholder="N/A" modifiers="{}"/>
                    <field name="job_duty_ids" placeholder="N/A" widget="many2many_tags" can_create="false" can_write="false" modifiers="{}"/>
                
                                </group>
                        
                    <group>
                        <field name="other_mobile_phones" context="{'form_view_ref': 'order.view_order_work_phone_form', 'tree_view_ref': 'order.view_order_work_phone_tree'}" modifiers="{}"/>
                    </group>
                
                    <group>
                        <field name="work_emails" context="{'form_view_ref': 'order.view_order_work_email_form', 'tree_view_ref': 'order.view_order_work_email_tree'}" modifiers="{}"/>
                        <field name="work_job_ids" modifiers="{}">
                            </field>
                        <field name="work_job_assist_ids" modifiers="{}">
                            </field>
                    </group>
                </group>
                        <notebook attrs="{'invisible' : [('is_superior', '!=', True)]}" modifiers="{&quot;invisible&quot;: [[&quot;is_superior&quot;, &quot;!=&quot;, true]]}">
                            
                <page name="public" string="简历">
                    <div class="row">
                        <div class="o_hr_skills_editable o_hr_skills_group o_group_resume col-lg-7 d-flex">
                            <!-- This field uses a custom tree view rendered by the 'hr_resume' widget.
                                Adding fields in the tree arch below makes them accessible to the widget
                            -->
                            <field mode="tree" nolabel="1" name="resume_line_ids" widget="hr_resume" modifiers="{}">
                                </field>
                        </div>
                        <div class="o_hr_skills_editable o_hr_skills_group o_group_skills col-lg-5 d-flex flex-column">
                            <separator string="派单权限"/>
                            <field mode="tree" name="employee_order_skill_ids" modifiers="{}">
                        </field>
                </div>
                    </div>
                </page>
            <page name="public" string="工作信息">
                                <div id="o_work_employee_container"> <!-- These two div are used to position org_chart -->
                                    <!--                    <div id="o_work_employee_main"></div>-->
                    <div id="o_work_employee_main">
                        <group string="Location" invisible="1" modifiers="{&quot;invisible&quot;: true}">
                            <field name="address_id" context="{'show_address': 1}" options="{&quot;always_reload&quot;: True, &quot;highlight_first_line&quot;: True}" on_change="1" can_create="true" can_write="true" modifiers="{}"/>
                            <field name="work_location_id" context="{'default_address_id': address_id}" can_create="false" can_write="false" modifiers="{}"/>
                        </group>
                        <group name="managers" string="Approvers" class="hide-group-if-empty" invisible="1" modifiers="{&quot;invisible&quot;: true}">
                            <!-- is overridden in other hr related modules -->
                        </group>
                        <group name="departure" string="Departure" invisible="1" modifiers="{&quot;invisible&quot;: true}">
                            <field name="departure_reason_id" options="{'no_edit': True, 'no_create': True, 'no_open': True}" can_create="true" can_write="true" modifiers="{}"/>
                            <field name="departure_description" modifiers="{}"/>
                            <field name="departure_date" modifiers="{}"/>
                        </group>
                        <group string="Schedule" invisible="1" modifiers="{&quot;invisible&quot;: true}">
                            <field name="resource_calendar_id" required="1" on_change="1" can_create="false" can_write="false" modifiers="{&quot;required&quot;: true}"/>
                            <field name="id" invisible="1" modifiers="{&quot;invisible&quot;: true, &quot;readonly&quot;: true}"/>
                            <field name="tz" attrs="{'required': [('id', '!=', False)]}" modifiers="{&quot;required&quot;: [[&quot;id&quot;, &quot;!=&quot;, false]]}"/>
                        </group>
                    </div>
                <div id="o_employee_right">
                    <h4 class="o_org_chart_title mb16 mt0">组织图表</h4>
                    <field name="child_ids" widget="hr_org_chart" readonly="1" modifiers="{&quot;readonly&quot;: true}"/>
                </div>
            
                                </div>
                            </page>
                            <page name="personal_information" string="个人隐私信息">
                                <group>
                                    
                    <group string="在职信息">
                        <field name="entry_date" placeholder="N/A" required="True" modifiers="{&quot;required&quot;: true}"/>
                        <field name="years_of_entry" placeholder="N/A" modifiers="{&quot;readonly&quot;: true}"/>
                        <field name="turn_positive_time" placeholder="N/A" modifiers="{}"/>
                        <field name="employee_evaluation_docx" invisible="1" modifiers="{&quot;invisible&quot;: true, &quot;readonly&quot;: true}"/>
                        <field name="employee_approval_docx" invisible="1" modifiers="{&quot;invisible&quot;: true, &quot;readonly&quot;: true}"/>
                        <field name="signature" widget="image" style="border: 1px solid #d3d3d3; background-color: #f0f0f0; width: 170px;" modifiers="{&quot;readonly&quot;: true}"/>
                        <field name="intern_turn_positive_time" placeholder="N/A" modifiers="{}"/>
                        <field name="accounts_bank" placeholder="N/A" invisible="1" modifiers="{&quot;invisible&quot;: true}"/>
                        <field name="bank_card_number" placeholder="N/A" invisible="1" modifiers="{&quot;invisible&quot;: true}"/>
                        <field name="salary_currency_id" placeholder="N/A" can_create="false" can_write="false" modifiers="{}"/>
                        <field name="current_salary" placeholder="N/A" modifiers="{}"/>
                        <field name="call_system_account" placeholder="N/A" modifiers="{}"/>
                    </group>
                <group string="私人联系" name="private_contact" invisible="1" modifiers="{&quot;invisible&quot;: true}">
                        <field name="household_address_id" placeholder="N/A" modifiers="{}"/>
                        <field name="address_home_id" invisible="1" can_create="true" can_write="true" modifiers="{&quot;invisible&quot;: true}"/>
                        <field name="bank_account_id" invisible="1" can_create="true" can_write="true" modifiers="{&quot;invisible&quot;: true}"/>
                        <field name="home_address" placeholder="N/A" modifiers="{}"/>
                        <field name="household_type" placeholder="N/A" modifiers="{}"/>
                        <field name="political_status" placeholder="N/A" modifiers="{}"/>
                        <field name="personnel_file_depository" placeholder="N/A" modifiers="{}"/>
                        <field name="private_email2" placeholder="N/A" widget="email" modifiers="{}"/>
                        <field name="private_phone" class="o_force_ltr" widget="phone" placeholder="N/A" modifiers="{}"/>
                    </group>
                <group string="基本信息" name="citizenship" invisible="1" modifiers="{&quot;invisible&quot;: true}">
                        <field name="country_id" placeholder="N/A" options="{&quot;no_open&quot;: False, &quot;no_create&quot;: False}" context="{'filter': 'commonly_used' }" can_create="true" can_write="true" modifiers="{}"/>
                        <field name="hometown_state" class="o_address_state" placeholder="N/A" options="{&quot;no_open&quot;: True, &quot;no_create&quot;: True}" can_create="true" can_write="true" modifiers="{}"/>
                        <field name="hometown" class="o_address_city" placeholder="N/A" options="{&quot;no_open&quot;: True, &quot;no_create&quot;: True}" can_create="true" can_write="true" modifiers="{}"/>
                        <field name="national" placeholder="N/A" can_create="false" can_write="false" modifiers="{}"/>
                        <field name="identification_document_type" placeholder="N/A" required="True" on_change="1" modifiers="{&quot;required&quot;: true}"/>
                        <field name="identification_document_number" placeholder="N/A" required="True" on_change="1" modifiers="{&quot;required&quot;: true}"/>
                        <field name="identification_document_expire_date" placeholder="N/A" modifiers="{}"/>
                        <field name="gender" modifiers="{}"/>
                        <field name="birthday" modifiers="{}"/>
                    </group>
                <group string="婚姻状况" name="marital_status" invisible="1" modifiers="{&quot;invisible&quot;: true}">
                        <field name="marital" placeholder="N/A" modifiers="{}"/>
                        <field name="children" placeholder="N/A" modifiers="{}"/>
                        <field name="spouse_complete_name" attrs="{'invisible': [('marital', 'not in', ['married', 'cohabitant'])]}" placeholder="N/A" modifiers="{&quot;invisible&quot;: [[&quot;marital&quot;, &quot;not in&quot;, [&quot;married&quot;, &quot;cohabitant&quot;]]]}"/>
                    </group>
                <group string="学历" name="education">
                        <field name="educations" context="{'form_view_ref': 'order.view_education_form', 'tree_view_ref': 'order.view_education_tree'}" can_create="false" can_write="false" modifiers="{}"/>
                    </group>
                    <group string="专业资格">
                        <field name="professional_qualifications" context="{'form_view_ref': 'order.view_professional_qualifications_form', 'tree_view_ref': 'order.view_professional_qualifications_tree'}" can_create="false" can_write="false" modifiers="{}"/>
                    </group>
                    <group string="紧急联系人" invisible="1" modifiers="{&quot;invisible&quot;: true}">
                        <field name="emergency_contacts" context="{'form_view_ref': 'order.view_emergency_contact_form', 'tree_view_ref': 'order.view_emergency_contact_tree'}" modifiers="{}"/>
                    </group>
                    <group string="离职情况" invisible="1" modifiers="{&quot;invisible&quot;: true}">
                        <field name="resignation_date" placeholder="N/A" modifiers="{}"/>
                        <field name="resignation_type" placeholder="N/A" modifiers="{}"/>
                        <field name="resignation_reason" placeholder="N/A" modifiers="{}"/>
                    </group>
                
                                    </group>
                            </page>
                            <page name="hr_settings" string="HR 设置" invisible="1" modifiers="{&quot;invisible&quot;: true}">
                                <group>
                                    <group string="状态" name="active_group">
                                        <field name="user_id" string="相关用户" domain="[('share', '=', False)]" on_change="1" can_create="false" can_write="false" modifiers="{}"/>
                                    </group>
                                    <group string="考勤/销售点" name="identification_group">
                                        <field name="pin" string="PIN码" modifiers="{}"/>
                                        <label for="barcode"/>
                                        <div class="o_row">
                                            <field name="barcode" modifiers="{}"/>
                                            <button string="生成" class="btn btn-link" type="object" name="generate_random_barcode" attrs="{'invisible': [('barcode', '!=', False)]}" modifiers="{&quot;invisible&quot;: [[&quot;barcode&quot;, &quot;!=&quot;, false]]}"/>
                                            <button name="136" string="打印工牌" class="btn btn-link" type="action" attrs="{'invisible': [('barcode', '=', False)]}" modifiers="{&quot;invisible&quot;: [[&quot;barcode&quot;, &quot;=&quot;, false]]}"/>
                                        </div>
                                    </group>
                                    <group name="application_group"/>
                                </group>
                            </page>
                    <page name="work_change_record" string="异动记录">
                        <group>
                            <field name="work_change_record_ids" context="{'form_view_ref': 'order.view_order_work_change_record_form', 'tree_view_ref': 'order.view_order_work_change_record_tree',                                    'default_employee_id': active_id}" on_change="1" modifiers="{}"/>
                        </group>
                    </page>
                    <page name="work_contract" string="合约签订情况">
                        <group>
                            <field name="work_contract_ids" context="{'form_view_ref': 'order.view_order_work_contract_signing_status_form', 'tree_view_ref': 'order.view_order_work_contract_signing_status_tree'}" modifiers="{}"/>
                        </group>
                    </page>
                    <page name="attachments" string="附件">
                        <group>
                            <field name="attachment_ids" context="{'form_view_ref': 'order.view_attachment_form_order', 'tree_view_ref': 'order.view_attachment_tree_order', 'file_size': 10*1024*1024}" can_create="true" can_write="true" modifiers="{&quot;required&quot;: true}"/>
                        </group>
                    </page>
                    <page name="privacy_attachments" string="隐私附件" invisible="1" modifiers="{&quot;invisible&quot;: true}">
                        <group>
                            <field name="privacy_attachment_ids" context="{'form_view_ref': 'order.view_privacy_attachment_form_order', 'tree_view_ref': 'order.view_privacy_attachment_tree_order', 'file_size': 10*1024*1024}" can_create="true" can_write="true" modifiers="{&quot;required&quot;: true}"/>
                        </group>
                    </page>
                    <page name="appraisal_attachments" string="考评文件">
                        <group>
                            <field name="appraisal_attachment_ids" modifiers="{}">
                                </field>
                        </group>
                    </page>
                
                
                        </notebook>

                    </sheet>
                    <div invisible="1" modifiers="{&quot;invisible&quot;: true}">
                        <div class="oe_chatter">
                            <field name="message_follower_ids" modifiers="{}"/>
                            <field name="activity_ids" modifiers="{}"/>
                            <field name="message_ids" modifiers="{}"/>
                        </div>
                    </div>
                </form>
